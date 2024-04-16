"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const questions_service_1 = tslib_1.__importDefault(require("@/services/questions.service"));
const questions_dto_1 = require("@/dtos/questions.dto");
const class_validator_1 = require("class-validator");
class QuestionsController {
    constructor() {
        this.questionsService = new questions_service_1.default();
        this.getAllQuestions = async (req, res) => {
            try {
                const questions = await this.questionsService.getAllQuestions();
                res.status(200).json({
                    message: "success",
                    error: null,
                    data: questions,
                });
            }
            catch (error) {
                console.log("Error in getAllQuestions handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.getQuestionById = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id) {
                    res.status(400).json({
                        message: "Validation failed",
                        error: "Question id is required",
                        data: {},
                    });
                }
                const question = await this.questionsService.getQuestionById(id);
                if (question) {
                    res.status(200).json({
                        message: "success",
                        error: null,
                        data: question,
                    });
                }
                else {
                    res.status(404).json({
                        message: "Question not found",
                        error: null,
                        data: {},
                    });
                }
            }
            catch (error) {
                console.log("Error in getQuestionById handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.createQuestion = async (req, res) => {
            try {
                const questionData = req.body;
                const createQuestionDto = new questions_dto_1.CreateQuestionDto();
                createQuestionDto.text = questionData.text;
                const errors = await (0, class_validator_1.validate)(createQuestionDto);
                if (errors.length > 0) {
                    res
                        .status(400)
                        .json({ message: "Validation failed", error: errors, data: {} });
                    return;
                }
                const newQuestion = await this.questionsService.createQuestion(questionData);
                res.status(201).json({
                    message: "success",
                    error: null,
                    data: newQuestion,
                });
            }
            catch (error) {
                console.log("Error in createQuestion handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.updateQuestion = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id) {
                    res.status(400).json({
                        message: "Validation failed",
                        error: "Question id is required",
                        data: {},
                    });
                }
                const updatedData = req.body;
                const updateQuestionDto = new questions_dto_1.UpdateQuestionDto();
                updateQuestionDto.text = updatedData.text;
                const errors = await (0, class_validator_1.validate)(updateQuestionDto);
                if (errors.length > 0) {
                    res
                        .status(400)
                        .json({ message: "Validation failed", error: errors, data: {} });
                    return;
                }
                const updatedQuestions = await this.questionsService.updateQuestion(id, updatedData);
                res.status(200).json({
                    message: "success",
                    error: null,
                    data: updatedQuestions,
                });
            }
            catch (error) {
                console.log("Error in updateQuestion handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.deleteQuestion = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id) {
                    res.status(400).json({
                        message: "Validation failed",
                        error: "Question id is required",
                        data: {},
                    });
                }
                const deletedCount = await this.questionsService.deleteQuestion(id);
                if (deletedCount === 0) {
                    res.status(404).json({
                        message: "Question not found",
                        error: null,
                        data: {},
                    });
                }
                else {
                    res.status(200).json({
                        message: "success",
                        error: null,
                        data: { id },
                    });
                }
            }
            catch (error) {
                console.log("Error in deleteQuestion handler", error.message);
                res.status(400).json({
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