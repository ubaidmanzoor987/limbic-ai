import Route from "@interfaces/routes.interface";
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - text
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of the user
 *         name:
 *           type: string
 *           description: Name of the user
 *       example:
 *         id: 17b1bbad-d9b5-48dd-b582-3ec04dc7d5fc
 *         name: John Doe
 */
declare class UsersRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    private usersController;
    constructor();
    private initializeRoutes;
}
export default UsersRoute;
