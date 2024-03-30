"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const questions_service_1 = tslib_1.__importDefault(require("../services/questions.service"));
class QuestionsController {
    constructor() {
        this.questionsService = new questions_service_1.default();
        this.getAllQuestions = async (req, res) => {
            try {
                const users = await this.questionsService.getAllQuestions();
                res.status(200).json({
                    status: true,
                    message: "success",
                    error: null,
                    data: users,
                });
            }
            catch (error) {
                console.log("Error in getAllQuestions handler", error.message);
                res.status(400).json({
                    success: false,
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
    }
}
exports.default = QuestionsController;
//# sourceMappingURL=questions.controller.js.map