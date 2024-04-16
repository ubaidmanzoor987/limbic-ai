"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = tslib_1.__importDefault(require("sequelize"));
const configs_1 = require("@/configs");
const users_model_1 = tslib_1.__importDefault(require("@models/users.model"));
const questions_model_1 = tslib_1.__importDefault(require("@/models/questions.model"));
const answers_model_1 = tslib_1.__importDefault(require("@/models/answers.model"));
const { host, port, database, user, password } = (0, configs_1.getDbConfig)();
const sequelize = new sequelize_1.default.Sequelize(database, user, password, {
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
    Users: (0, users_model_1.default)(sequelize),
    Questions: (0, questions_model_1.default)(sequelize),
    Answers: (0, answers_model_1.default)(sequelize),
    sequelize,
    Sequelize: // connection instance (RAW queries)
    sequelize_1.default, // library
};
DB.Answers.belongsTo(DB.Questions, { foreignKey: 'question_id', targetKey: 'id', as: "question" });
DB.Answers.belongsTo(DB.Users, { foreignKey: 'user_id', targetKey: 'id', as: "user" });
exports.default = DB;
//# sourceMappingURL=index.js.map