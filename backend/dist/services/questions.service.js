"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = tslib_1.__importDefault(require("@databases"));
class QuestionsService {
    constructor() {
        this.questions = _databases_1.default.Questions;
    }
    async getAllQuestions() {
        return await this.questions.findAll();
    }
    async getQuestionById(id) {
        return await this.questions.findByPk(id);
    }
    async createQuestion(questionData) {
        return await this.questions.create(questionData);
    }
    async updateQuestion(id, updatedData) {
        const resp = await this.questions.update(updatedData, { where: { id } });
        return await this.getQuestionById(id);
    }
    async deleteQuestion(id) {
        return await this.questions.destroy({ where: { id } });
    }
}
exports.default = QuestionsService;
//# sourceMappingURL=questions.service.js.map