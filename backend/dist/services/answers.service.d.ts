import { IAnswers } from "@/interfaces/answers.interface";
declare class AnswersService {
    private answers;
    getAllAnswers(): Promise<IAnswers[]>;
    getAnswerById(id: string): Promise<IAnswers | null>;
    createAnswer(questionData: Omit<IAnswers, "id">): Promise<IAnswers>;
    updateAnswer(id: string, updatedData: Partial<IAnswers>): Promise<IAnswers>;
    deleteAnswer(id: string): Promise<number>;
}
export default AnswersService;
