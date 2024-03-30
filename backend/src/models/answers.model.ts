import { Sequelize, DataTypes, Model, Optional, UUIDV4 } from "sequelize";
import { IAnswers } from "@interfaces/answers.interface";
import { QuestionsModel } from "./questions.model";

export type AnswersCreationAttributes = Optional<
  IAnswers,
  "id" | "text" | "questionId" | "userId"
>;

export class AnswersModal
  extends Model<IAnswers, AnswersCreationAttributes>
  implements IAnswers
{
  public id: string;
  public text: string;
  public questionId: string;
  public userId: string;
}

export default function (sequelize: Sequelize): typeof AnswersModal {
  AnswersModal.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      questionId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
    },
    {
      tableName: "answers",
      timestamps: true,
      sequelize,
    }
  );

  return AnswersModal;
}
