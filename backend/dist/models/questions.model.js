"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
class QuestionsModel extends sequelize_1.Model {
}
exports.QuestionsModel = QuestionsModel;
function default_1(sequelize) {
    QuestionsModel.init({
        id: {
            primaryKey: true,
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_2.UUIDV4,
        },
        text: {
            allowNull: true,
            type: sequelize_1.DataTypes.TEXT,
        },
    }, {
        tableName: "questions",
        timestamps: true,
        sequelize,
    });
    return QuestionsModel;
}
exports.default = default_1;
//# sourceMappingURL=questions.model.js.map