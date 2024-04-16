import { Request, Response } from "express";
declare class AnswersController {
    private answersService;
    private usersService;
    private questionsService;
    private validateQuestion;
    private validateUser;
    getAllAnswers: (req: Request, res: Response) => Promise<void>;
    getAnswerById: (req: Request, res: Response) => Promise<void>;
    createAnswer: (req: Request, res: Response) => Promise<void>;
    updateAnswer: (req: Request, res: Response) => Promise<void>;
    deleteAnswer: (req: Request, res: Response) => Promise<void>;
}
export default AnswersController;
