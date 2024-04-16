"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswersModal = void 0;
const sequelize_1 = require("sequelize");
class AnswersModal extends sequelize_1.Model {
}
exports.AnswersModal = AnswersModal;
function default_1(sequelize) {
    AnswersModal.init({
        id: {
            primaryKey: true,
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
        },
        text: {
            allowNull: false,
            type: sequelize_1.DataTypes.TEXT,
        },
        questionId: {
            allowNull: false,
            type: sequelize_1.DataTypes.UUID,
        },
        userId: {
            allowNull: false,
            type: sequelize_1.DataTypes.UUID,
        },
    }, {
        tableName: "answers",
        timestamps: true,
        sequelize,
    });
    return AnswersModal;
}
exports.default = default_1;
//# sourceMappingURL=answers.model.js.map