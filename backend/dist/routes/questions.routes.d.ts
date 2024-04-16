import Route from "@interfaces/routes.interface";
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
declare class QuestionsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    private questionsController;
    constructor();
    private initializeRoutes;
}
export default QuestionsRoute;
