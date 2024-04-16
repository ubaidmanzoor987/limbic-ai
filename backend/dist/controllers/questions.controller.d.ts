import { Request, Response } from "express";
declare class QuestionsController {
    private questionsService;
    getAllQuestions: (req: Request, res: Response) => Promise<void>;
    getQuestionById: (req: Request, res: Response) => Promise<void>;
    createQuestion: (req: Request, res: Response) => Promise<void>;
    updateQuestion: (req: Request, res: Response) => Promise<void>;
    deleteQuestion: (req: Request, res: Response) => Promise<void>;
}
export default QuestionsController;
