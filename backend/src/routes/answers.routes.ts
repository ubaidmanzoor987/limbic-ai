import { Router } from "express";

import Route from "@interfaces/routes.interface";
import AnswersController from "@/controllers/answers.controller";

/**
 * @swagger
 * tags:
 *   name: Answers
 *   description: API endpoints for managing answers
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Answer:
 *       type: object
 *       required:
 *         - text
 *         - questionId
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of the answer
 *         text:
 *           type: string
 *           description: The text of the answer
 *         questionId:
 *           type: string
 *           description: The unique identifier of the question
 *         userId:
 *           type: string
 *           description: The unique identifier of the user
 *       example:
 *         id: 16b1bbaf-d9b5-48dd-b582-3ec04dc7d5fc
 *         questionId: 17b2bbad-d9b5-48dd-b582-3ec04dc7d5lk
 *         userId: 11b1bbal-d9b5-48dd-b582-3ec04dc7d5dc
 *         text: Nigeria
 */

class AnswersRoute implements Route {
  public path = "/answers";
  public router = Router();
  private answersController = new AnswersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /answers:
     *   get:
     *     summary: Returns the list of all answers
     *     tags: [Answers]
     *     responses:
     *       200:
     *         description: The list of answers
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Answer'
     */
    this.router.get(`${this.path}`, this.answersController.getAllAnswers);

    /**
     * @swagger
     * /answers/{id}:
     *   get:
     *     summary: Get a answer by ID
     *     tags: [Answers]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the answers to retrieve
     *     responses:
     *       200:
     *         description: The answers retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Answer'
     *       404:
     *         description: Answer not found
     */
    this.router.get(`${this.path}/:id`, this.answersController.getAnswerById);

    /**
     * @swagger
     * /answers-by-question-id/{id}:
     *   get:
     *     summary: Returns the list of all answers by question id
     *     tags: [Answers]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the question to retrieve its answers
     *     responses:
     *       200:
     *         description: The list of answers
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Answer'
     *       400:
     *         description: Bad request
     */
    this.router.get(
      `${this.path}-by-question-id/:id`,
      this.answersController.getAllAnswersByQuestionId
    );

    /**
     * @swagger
     * /answers:
     *   post:
     *     summary: Create a new answer
     *     tags: [Answers]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - text
     *               - questionId
     *             properties:
     *               text:
     *                 type: string
     *                 description: The text of the question
     *                 example: red
     *               questionId:
     *                 type: string
     *                 description: The id of the question
     *                 example: 11b1bbal-d9b5-48dd-b582-3ec04dc7d5dc
     *               userId:
     *                 type: string
     *                 description: The id of the user
     *                 example: 11b1bbal-d9b5-48dd-b582-3ec04dl7d5dc
     *     responses:
     *       201:
     *         description: Answer created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Answer'
     *       400:
     *         description: Bad request
     */
    this.router.post(`${this.path}`, this.answersController.createAnswer);

    /**
     * @swagger
     * /answers/{id}:
     *   put:
     *     summary: Update a answer by ID
     *     tags: [Answers]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the answer to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               text:
     *                 type: string
     *                 description: The text of the question
     *                 example: What is your favorite color?
     *               questionId:
     *                 type: string
     *                 description: The id of the question
     *                 example: 11b1bbal-d9b5-48dd-b582-3ec04dc7d5dc
     *               userId:
     *                 type: string
     *                 description: The id of the answer
     *                 example: 11b1bbal-d9b5-48dd-b582-3ec04dl7d5dc
     *     responses:
     *       200:
     *         description: The answer was updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Answer'
     *       404:
     *         description: Answer not found
     *       400:
     *         description: Bad request
     */
    this.router.put(`${this.path}/:id`, this.answersController.updateAnswer);

    /**
     * @swagger
     * /answers/{id}:
     *   delete:
     *     summary: Delete an answer by ID
     *     tags: [Answers]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the answer to delete
     *     responses:
     *       200:
     *         description: The answer was deleted successfully
     *       404:
     *         description: Answer not found
     *       400:
     *         description: Bad request
     */

    this.router.delete(`${this.path}/:id`, this.answersController.deleteAnswer);
  }
}

export default AnswersRoute;
