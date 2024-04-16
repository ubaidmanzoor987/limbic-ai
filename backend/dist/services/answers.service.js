"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = tslib_1.__importDefault(require("@databases"));
class AnswersService {
    constructor() {
        this.answers = _databases_1.default.Answers;
    }
    async getAllAnswers() {
        return await this.answers.findAll();
    }
    async getAnswerById(id) {
        return await this.answers.findByPk(id, {
            include: [
                {
                    model: _databases_1.default.Questions,
                    as: "question",
                },
                {
                    model: _databases_1.default.Users,
                    as: "user",
                },
            ],
        });
    }
    async createAnswer(questionData) {
        return await this.answers.create(questionData);
    }
    async updateAnswer(id, updatedData) {
        const resp = await this.answers.update(updatedData, { where: { id } });
        return await this.getAnswerById(id);
    }
    async deleteAnswer(id) {
        return await this.answers.destroy({ where: { id } });
    }
}
exports.default = AnswersService;
//# sourceMappingURL=answers.service.js.map