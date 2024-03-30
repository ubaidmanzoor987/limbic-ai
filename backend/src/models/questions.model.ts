import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { IQuestions } from "@interfaces/questions.interface";
import { UUIDV4 } from "sequelize";

export type QuestionsCreationAttributes = Optional<IQuestions, "id" | "text">;

export class QuestionsModel
  extends Model<IQuestions, QuestionsCreationAttributes>
  implements IQuestions
{
  public id: string;
  public text: string;
}

export default function (sequelize: Sequelize): typeof QuestionsModel {
  QuestionsModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID, 
        defaultValue: UUIDV4,
      },
      text: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "questions",
      timestamps: true,
      sequelize,
    }
  );

  return QuestionsModel;
}
