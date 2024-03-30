import { Request, Response } from "express";
declare class QuestionsController {
    private questionsService;
    getAllQuestions: (req: Request, res: Response) => Promise<void>;
}
export default QuestionsController;
