"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const questions_controller_1 = tslib_1.__importDefault(require("../controllers/questions.controller"));
class QuestionsRoute {
    constructor() {
        this.path = "/questions";
        this.router = (0, express_1.Router)();
        this.questionsController = new questions_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.questionsController.getAllQuestions);
    }
}
exports.default = QuestionsRoute;
//# sourceMappingURL=questions.route.js.map