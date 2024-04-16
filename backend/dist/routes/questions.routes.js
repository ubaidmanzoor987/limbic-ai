"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const questions_controller_1 = tslib_1.__importDefault(require("@/controllers/questions.controller"));
/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: API endpoints for managing questions
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of the question
 *         text:
 *           type: string
 *           description: The text of the question
 *       example:
 *         id: 17b1bbad-d9b5-48dd-b582-3ec04dc7d5fc
 *         text: What is the capital of France?
 */
class QuestionsRoute {
    constructor() {
        this.path = "/questions";
        this.router = (0, express_1.Router)();
        this.questionsController = new questions_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        /**
         * @swagger
         * /questions:
         *   get:
         *     summary: Returns the list of all questions
         *     tags: [Questions]
         *     responses:
         *       200:
         *         description: The list of questions
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/Question'
         */
        this.router.get(`${this.path}`, this.questionsController.getAllQuestions);
        /**
         * @swagger
         * /questions/{id}:
         *   get:
         *     summary: Get a question by ID
         *     tags: [Questions]
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: string
         *         required: true
         *         description: The ID of the question to retrieve
         *     responses:
         *       200:
         *         description: The question retrieved successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Question'
         *       404:
         *         description: Question not found
         */
        this.router.get(`${this.path}/:id`, this.questionsController.getQuestionById);
        /**
         * @swagger
         * /questions:
         *   post:
         *     summary: Create a new question
         *     tags: [Questions]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             required:
         *               - text
         *             properties:
         *               text:
         *                 type: string
         *                 description: The text of the question
         *                 example: What is your favorite color?
         *     responses:
         *       201:
         *         description: Question created successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Question'
         *       400:
         *         description: Bad request
         */
        this.router.post(`${this.path}`, this.questionsController.createQuestion);
        /**
         * @swagger
         * /questions/{id}:
         *   put:
         *     summary: Update a question by ID
         *     tags: [Questions]
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: string
         *         required: true
         *         description: The ID of the question to update
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               text:
         *                 type: string
         *                 description: The updated text of the question
         *     responses:
         *       200:
         *         description: The question was updated successfully
         *         content:
         *           application/json:
         *             schema:
         *               $ref: '#/components/schemas/Question'
         *       404:
         *         description: Question not found
         *       400:
         *         description: Bad request
         */
        this.router.put(`${this.path}/:id`, this.questionsController.updateQuestion);
        /**
         * @swagger
         * /questions/{id}:
         *   delete:
         *     summary: Delete a question by ID
         *     tags: [Questions]
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: string
         *         required: true
         *         description: The ID of the question to delete
         *     responses:
         *       200:
         *         description: The question was deleted successfully
         *       404:
         *         description: Question not found
         *       400:
         *         description: Bad request
         */
        this.router.delete(`${this.path}/:id`, this.questionsController.deleteQuestion);
    }
}
exports.default = QuestionsRoute;
//# sourceMappingURL=questions.routes.js.map