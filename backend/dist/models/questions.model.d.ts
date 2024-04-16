import { Sequelize, Model, Optional } from "sequelize";
import { IQuestions } from "@interfaces/questions.interface";
export type QuestionsCreationAttributes = Optional<IQuestions, "id" | "text">;
export declare class QuestionsModel extends Model<IQuestions, QuestionsCreationAttributes> implements IQuestions {
    id: string;
    text: string;
}
export default function (sequelize: Sequelize): typeof QuestionsModel;
