import { Request, Response } from "express";
import QuestionsService from "@/services/questions.service";
import { IQuestions } from "@/interfaces/questions.interface";
import { CreateQuestionDto, UpdateQuestionDto } from "@/dtos/questions.dto";
import { validate } from "class-validator";

class QuestionsController {
  private questionsService = new QuestionsService();

  public getAllQuestions = async (req: Request, res: Response) => {
    try {
      const questions = await this.questionsService.getAllQuestions();
      res.status(200).json({
        message: "success",
        error: null,
        data: questions,
      });
    } catch (error) {
      console.log("Error in getAllQuestions handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public getQuestionById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      if (!id) {
        res.status(400).json({
          message: "Validation failed",
          error: "Question id is required",
          data: {},
        });
      }

      const question = await this.questionsService.getQuestionById(id);
      if (question) {
        res.status(200).json({
          message: "success",
          error: null,
          data: question,
        });
      } else {
        res.status(404).json({
          message: "Question not found",
          error: null,
          data: {},
        });
      }
    } catch (error) {
      console.log("Error in getQuestionById handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public createQuestion = async (req: Request, res: Response) => {
    try {
      const questionData: Omit<IQuestions, "id"> = req.body;

      const createQuestionDto = new CreateQuestionDto();
      createQuestionDto.text = questionData.text;

      const errors = await validate(createQuestionDto);
      if (errors.length > 0) {
        res
          .status(400)
          .json({ message: "Validation failed", error: errors, data: {} });
        return;
      }

      const newQuestion = await this.questionsService.createQuestion(
        questionData
      );
      res.status(201).json({
        message: "success",
        error: null,
        data: newQuestion,
      });
    } catch (error) {
      console.log("Error in createQuestion handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public updateQuestion = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      if (!id) {
        res.status(400).json({
          message: "Validation failed",
          error: "Question id is required",
          data: {},
        });
      }

      const updatedData: Partial<IQuestions> = req.body;
      const updateQuestionDto = new UpdateQuestionDto();
      updateQuestionDto.text = updatedData.text;

      const errors = await validate(updateQuestionDto);
      if (errors.length > 0) {
        res
          .status(400)
          .json({ message: "Validation failed", error: errors, data: {} });
        return;
      }

      const updatedQuestions = await this.questionsService.updateQuestion(
        id,
        updatedData
      );

      res.status(200).json({
        message: "success",
        error: null,
        data: updatedQuestions,
      });
    } catch (error) {
      console.log("Error in updateQuestion handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public deleteQuestion = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      if (!id) {
        res.status(400).json({
          message: "Validation failed",
          error: "Question id is required",
          data: {},
        });
      }

      const deletedCount = await this.questionsService.deleteQuestion(id);
      if (deletedCount === 0) {
        res.status(404).json({
          message: "Question not found",
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
      console.log("Error in deleteQuestion handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };
}

export default QuestionsController;
