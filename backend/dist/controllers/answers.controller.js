"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const answers_service_1 = tslib_1.__importDefault(require("@/services/answers.service"));
const questions_service_1 = tslib_1.__importDefault(require("@/services/questions.service"));
const users_service_1 = tslib_1.__importDefault(require("@/services/users.service"));
const answers_dto_1 = require("@/dtos/answers.dto");
const class_validator_1 = require("class-validator");
class AnswersController {
    constructor() {
        this.answersService = new answers_service_1.default();
        this.usersService = new users_service_1.default();
        this.questionsService = new questions_service_1.default();
        this.validateQuestion = async (questionId) => {
            try {
                const question = await this.questionsService.getQuestionById(questionId);
                return question;
            }
            catch (error) {
                console.log("failed to get question", error.message);
                throw new Error(`question with id ${questionId} not found`);
            }
        };
        this.validateUser = async (userId) => {
            try {
                const user = await this.usersService.getUserById(userId);
                return user;
            }
            catch (error) {
                console.log("failed to get user", error.message);
                throw new Error(`user with id ${userId} not found`);
            }
        };
        this.getAllAnswers = async (req, res) => {
            try {
                const questions = await this.answersService.getAllAnswers();
                res.status(200).json({
                    message: "success",
                    error: null,
                    data: questions,
                });
            }
            catch (error) {
                console.log("Error in getAllAnswers handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.getAnswerById = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id) {
                    res.status(400).json({
                        message: "Validation failed",
                        error: "Answer id is required",
                        data: {},
                    });
                }
                const answer = await this.answersService.getAnswerById(id);
                if (answer) {
                    res.status(200).json({
                        message: "success",
                        error: null,
                        data: answer,
                    });
                }
                else {
                    res.status(404).json({
                        message: "Answer not found",
                        error: null,
                        data: {},
                    });
                }
            }
            catch (error) {
                console.log("Error in getAnswerById handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.createAnswer = async (req, res) => {
            try {
                const answerData = req.body;
                const createAnswerDto = new answers_dto_1.CreateAnswerDto();
                createAnswerDto.text = answerData.text;
                const errors = await (0, class_validator_1.validate)(createAnswerDto);
                if (errors.length > 0) {
                    res
                        .status(400)
                        .json({ message: "Validation failed", error: errors, data: {} });
                    return;
                }
                // validating questionId and userId
                await Promise.all([
                    this.validateQuestion(answerData.questionId),
                    this.validateUser(answerData.userId),
                ]);
                const newAnswer = await this.answersService.createAnswer(answerData);
                res.status(201).json({
                    message: "success",
                    error: null,
                    data: newAnswer,
                });
            }
            catch (error) {
                console.log("Error in createAnswer handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.updateAnswer = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id) {
                    res.status(400).json({
                        message: "Validation failed",
                        error: "Answer id is required",
                        data: {},
                    });
                }
                const updatedData = req.body;
                const updateAnswerDto = new answers_dto_1.UpdateAnswerDto();
                updateAnswerDto.text = updatedData.text;
                const errors = await (0, class_validator_1.validate)(updateAnswerDto);
                if (errors.length > 0) {
                    res
                        .status(400)
                        .json({ message: "Validation failed", error: errors, data: {} });
                    return;
                }
                // validating questionId and userId
                await Promise.all([
                    this.validateQuestion(updatedData.questionId),
                    this.validateUser(updatedData.userId),
                ]);
                const updatedAnswer = await this.questionsService.updateQuestion(id, updatedData);
                res.status(200).json({
                    message: "success",
                    error: null,
                    data: updatedAnswer,
                });
            }
            catch (error) {
                console.log("Error in updateAnswer handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.deleteAnswer = async (req, res) => {
            try {
                const id = req.params.id;
                if (!id) {
                    res.status(400).json({
                        message: "Validation failed",
                        error: "Answer id is required",
                        data: {},
                    });
                }
                const deletedCount = await this.answersService.deleteAnswer(id);
                if (deletedCount === 0) {
                    res.status(404).json({
                        message: "Answer not found",
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
                console.log("Error in deleteAnswer handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
    }
}
exports.default = AnswersController;
//# sourceMappingURL=answers.controller.js.map