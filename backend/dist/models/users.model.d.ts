import { Sequelize, Model, Optional } from "sequelize";
import { IUsers } from "@interfaces/users.interface";
export type UserCreationAttributes = Optional<IUsers, "id" | "name">;
export declare class UserModel extends Model<IUsers, UserCreationAttributes> implements IUsers {
    id: string;
    name: string;
}
export default function (sequelize: Sequelize): typeof UserModel;
