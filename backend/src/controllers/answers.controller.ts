import { Request, Response } from "express";
import { validate } from "class-validator";

import { IAnswers } from "@/interfaces/answers.interface";
import AnswersService from "@/services/answers.service";
import QuestionsService from "@/services/questions.service";
import { IQuestions } from "@/interfaces/questions.interface";
import { CreateAnswerDto, UpdateAnswerDto } from "@/dtos/answers.dto";

class AnswersController {
  private answersService = new AnswersService();
  private questionsService = new QuestionsService();

  private validateQuestion = async (
    questionId: string
  ): Promise<IQuestions | null> => {
    try {
      const question = await this.questionsService.getQuestionById(questionId);
      return question;
    } catch (error) {
      console.log("failed to get question", error.message);
      throw new Error(`question with id ${questionId} not found`);
    }
  };

  public getAllAnswers = async (req: Request, res: Response) => {
    try {
      const answers = await this.answersService.getAllAnswers();
      res.status(200).json({
        message: "success",
        error: null,
        data: answers,
      });
    } catch (error) {
      console.log("Error in getAllAnswers handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public getAnswerById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      if (!id) {
        res.status(400).json({
          message: "Validation failed",
          error: "Answer id is required",
          data: {},
        });
      }

      const answer = await this.answersService.getAnswerById(id);
      if (answer) {
        res.status(200).json({
          message: "success",
          error: null,
          data: answer,
        });
      } else {
        res.status(404).json({
          message: "Answer not found",
          error: null,
          data: {},
        });
      }
    } catch (error) {
      console.log("Error in getAnswerById handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public createAnswer = async (req: Request, res: Response) => {
    try {
      const answerData: Omit<IAnswers, "id"> = req.body;

      const createAnswerDto = new CreateAnswerDto();
      createAnswerDto.text = answerData.text;
      createAnswerDto.questionId = answerData.questionId;
      createAnswerDto.userId = answerData?.userId;

      const errors = await validate(createAnswerDto);
      if (errors.length > 0) {
        res
          .status(400)
          .json({ message: "Validation failed", error: errors, data: {} });
        return;
      }

      // validating questionId
      await this.validateQuestion(answerData.questionId);

      const newAnswer = await this.answersService.createAnswer(answerData);
      res.status(201).json({
        message: "success",
        error: null,
        data: newAnswer,
      });
    } catch (error) {
      console.log("Error in createAnswer handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public updateAnswer = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      if (!id) {
        res.status(400).json({
          message: "Validation failed",
          error: "Answer id is required",
          data: {},
        });
      }

      const updatedData: Partial<IAnswers> = req.body;

      const updateAnswerDto = new UpdateAnswerDto();
      updateAnswerDto.text = updatedData.text;
      updateAnswerDto.questionId = updatedData.questionId;

      const errors = await validate(updateAnswerDto);
      if (errors.length > 0) {
        res
          .status(400)
          .json({ message: "Validation failed", error: errors, data: {} });
        return;
      }

      // validating questionId
      await this.validateQuestion(updatedData.questionId);

      const updatedAnswer = await this.answersService.updateAnswer(
        id,
        updatedData
      );

      res.status(200).json({
        message: "success",
        error: null,
        data: updatedAnswer,
      });
    } catch (error) {
      console.log("Error in updateAnswer handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public deleteAnswer = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      if (!id) {
        res.status(400).json({
          message: "Validation failed",
          error: "Answer id is required",
          data: {},
        });
      }

      const deletedCount = await this.answersService.deleteAnswer(id);
      if (deletedCount === 0) {
        res.status(404).json({
          message: "Answer not found",
          error: null,
          data: {},
        });
      } else {
        res.status(200).json({
          message: "success",
          error: null,
          data: { id },
        });
      }
    } catch (error) {
      console.log("Error in deleteAnswer handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public getAllAnswersByQuestionId = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      if (!id) {
        res.status(400).json({
          message: "Validation failed",
          error: "Question id is required",
          data: {},
        });
      }

      // validating questionId
      await this.validateQuestion(id);

      const answers = await this.answersService.getAllAnswersByQuestionsId(id);
      res.status(200).json({
        message: "success",
        error: null,
        data: answers,
      });
    } catch (error) {
      console.log("Error in getAllAnswersByQuestionId handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };
}

export default AnswersController;
