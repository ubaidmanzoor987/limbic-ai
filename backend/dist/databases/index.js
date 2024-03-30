"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = tslib_1.__importDefault(require("sequelize"));
const users_model_1 = tslib_1.__importDefault(require("../models/users.model"));
const questions_model_1 = tslib_1.__importDefault(require("../models/questions.model"));
const host = process.env.DATABASE_HOST;
const port = (_a = Number(process.env.DATABASE_PORT)) !== null && _a !== void 0 ? _a : 5432;
const database = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
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
    sequelize,
    Sequelize: // connection instance (RAW queries)
    sequelize_1.default, // library
};
// DB.Answers.hasMany(DB.Questions, { foreignKey: 'question_id' });
// DB.Answers.belongsTo(DB.Questions, { foreignKey: 'question_id', targetKey: 'id' });
exports.default = DB;
//# sourceMappingURL=index.js.map