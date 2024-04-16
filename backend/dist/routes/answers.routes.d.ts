import Route from "@interfaces/routes.interface";
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
 *         - userId
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
declare class AnswersRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    private answersController;
    constructor();
    private initializeRoutes;
}
export default AnswersRoute;
