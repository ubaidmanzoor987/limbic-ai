import { IQuestions } from "../interfaces/questions.interface";
declare class QuestionService {
    private questions;
    getAllQuestions(): Promise<IQuestions[]>;
}
export default QuestionService;
