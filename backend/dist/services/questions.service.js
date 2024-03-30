"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = tslib_1.__importDefault(require("../databases"));
class QuestionService {
    constructor() {
        this.questions = _databases_1.default.Questions;
    }
    async getAllQuestions() {
        return await this.questions.findAll();
    }
}
exports.default = QuestionService;
//# sourceMappingURL=questions.service.js.map