import DB from "@databases";
import { IAnswers } from "@/interfaces/answers.interface";

class AnswersService {
  private answers = DB.Answers;

  public async getAllAnswers(): Promise<IAnswers[]> {
    return await this.answers.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: DB.Questions,
          as: "question",
        },
      ],
    });
  }

  public async getAnswerById(id: string): Promise<IAnswers | null> {
    return await this.answers.findByPk(id, {
      include: [
        {
          model: DB.Questions,
          as: "question",
        },
        {
          model: DB.Users,
          as: "user",
        },
      ],
    });
  }

  public async createAnswer(
    questionData: Omit<IAnswers, "id">
  ): Promise<IAnswers> {
    return await this.answers.create(questionData);
  }

  public async updateAnswer(
    id: string,
    updatedData: Partial<IAnswers>
  ): Promise<IAnswers> {
    const resp = await this.answers.update(updatedData, { where: { id } });
    return await this.getAnswerById(id);
  }

  public async deleteAnswer(id: string): Promise<number> {
    return await this.answers.destroy({ where: { id } });
  }

  public async getAllAnswersByQuestionsId(
    questionId: string
  ): Promise<IAnswers[]> {
    return await this.answers.findAll({
      where: {
        questionId,
      },
      include: [
        {
          model: DB.Users,
          as: "user",
          attributes: ["id", "name"],
        },
      ],
    });
  }
}

export default AnswersService;
