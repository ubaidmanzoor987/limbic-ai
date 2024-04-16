import Sequelize from "sequelize";
declare const DB: {
    Users: typeof import("@models/users.model").UserModel;
    Questions: typeof import("@/models/questions.model").QuestionsModel;
    Answers: typeof import("@/models/answers.model").AnswersModal;
    sequelize: Sequelize.Sequelize;
    Sequelize: typeof Sequelize;
};
export default DB;
