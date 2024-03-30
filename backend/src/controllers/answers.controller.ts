import { Request, Response } from "express";

import { IAnswers } from "@/interfaces/answers.interface";
import AnswersService from "@/services/answers.service";
import QuestionsService from "@/services/questions.service";
import UsersService from "@/services/users.service";
import { IQuestions } from "@/interfaces/questions.interface";
import { IUsers } from "@/interfaces/users.interface";
import { CreateAnswerDto, UpdateAnswerDto } from "@/dtos/answers.dto";
import { validate } from "class-validator";

class AnswersController {
  private answersService = new AnswersService();
  private usersService = new UsersService();
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

  private validateUser = async (userId: string): Promise<IUsers | null> => {
    try {
      const user = await this.usersService.getUserById(userId);
      return user;
    } catch (error) {
      console.log("failed to get user", error.message);
      throw new Error(`user with id ${userId} not found`);
    }
  };

  public getAllAnswers = async (req: Request, res: Response) => {
    try {
      const questions = await this.answersService.getAllAnswers();
      res.status(200).json({
        message: "success",
        error: null,
        data: questions,
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

      const errors = await validate(createAnswerDto);
      if (errors.length > 0) {
        res
          .status(400)
          .json({ message: "Validation failed", error: errors, data: {} });
        return;
      }

      // validating questionId and userId
      await Promise.all([
        this.validateQuestion(answerData.questionId),
        this.validateUser(answerData.userId),
      ]);

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

      const errors = await validate(updateAnswerDto);
      if (errors.length > 0) {
        res
          .status(400)
          .json({ message: "Validation failed", error: errors, data: {} });
        return;
      }

      // validating questionId and userId
      await Promise.all([
        this.validateQuestion(updatedData.questionId),
        this.validateUser(updatedData.userId),
      ]);

      const updatedAnswer = await this.questionsService.updateQuestion(
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
}

export default AnswersController;
