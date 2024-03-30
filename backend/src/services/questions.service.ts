import DB from "@databases";
import { IQuestions } from "@/interfaces/questions.interface";

class QuestionsService {
  private questions = DB.Questions;

  public async getAllQuestions(): Promise<IQuestions[]> {
    return await this.questions.findAll();
  }

  public async getQuestionById(id: string): Promise<IQuestions | null> {
    return await this.questions.findByPk(id);
  }

  public async createQuestion(
    questionData: Omit<IQuestions, "id">
  ): Promise<IQuestions> {
    return await this.questions.create(questionData);
  }

  public async updateQuestion(
    id: string,
    updatedData: Partial<IQuestions>
  ): Promise<IQuestions> {
    const resp = await this.questions.update(updatedData, { where: { id } });
    return await this.getQuestionById(id);
  }

  public async deleteQuestion(id: string): Promise<number> {
    return await this.questions.destroy({ where: { id } });
  }
}

export default QuestionsService;
