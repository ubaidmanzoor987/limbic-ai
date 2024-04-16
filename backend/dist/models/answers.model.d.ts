import { Sequelize, Model, Optional } from "sequelize";
import { IAnswers } from "@interfaces/answers.interface";
export type AnswersCreationAttributes = Optional<IAnswers, "id" | "text" | "questionId" | "userId">;
export declare class AnswersModal extends Model<IAnswers, AnswersCreationAttributes> implements IAnswers {
    id: string;
    text: string;
    questionId: string;
    userId: string;
}
export default function (sequelize: Sequelize): typeof AnswersModal;
