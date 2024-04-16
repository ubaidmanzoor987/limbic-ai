import { IQuestions } from "@/interfaces/questions.interface";
declare class QuestionsService {
    private questions;
    getAllQuestions(): Promise<IQuestions[]>;
    getQuestionById(id: string): Promise<IQuestions | null>;
    createQuestion(questionData: Omit<IQuestions, "id">): Promise<IQuestions>;
    updateQuestion(id: string, updatedData: Partial<IQuestions>): Promise<IQuestions>;
    deleteQuestion(id: string): Promise<number>;
}
export default QuestionsService;
