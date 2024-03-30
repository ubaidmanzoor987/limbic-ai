import Sequelize from "sequelize";

import { getDbConfig } from "@/configs";

import UsersModel from "@models/users.model";
import QuestionsModel from "@/models/questions.model";
import AnswersModel from "@/models/answers.model";

const { host, port, database, user, password } = getDbConfig();

const sequelize = new Sequelize.Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    underscored: true,
    freezeTableName: true,
    timestamps: true,
  },
  pool: {
    min: 0,
    max: 100,
    idle: 300000,
    acquire: 300000,
  },
  logQueryParameters: process.env.NODE_ENV === "development",
  logging: (query, time) => {
    console.info(time + "ms" + " " + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UsersModel(sequelize),
  Questions: QuestionsModel(sequelize),
  Answers: AnswersModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

DB.Answers.belongsTo(DB.Questions, { foreignKey: 'question_id', targetKey: 'id', as: "question" });
DB.Answers.belongsTo(DB.Users, { foreignKey: 'user_id', targetKey: 'id', as: "user" });

export default DB;
