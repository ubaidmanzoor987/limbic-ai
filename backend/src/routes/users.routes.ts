import { Router } from "express";

import Route from "@interfaces/routes.interface";
import UsersController from "@/controllers/users.controller";

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

class UsersRoute implements Route {
  public path = "/users";
  public router = Router();
  private usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Returns the list of all users
     *     tags: [Users]
     *     responses:
     *       200:
     *         description: The list of users
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     */
    this.router.get(`${this.path}`, this.usersController.getAllUsers);

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Get a user by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user to retrieve
     *     responses:
     *       200:
     *         description: The user retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *         description: user not found
     */
    this.router.get(`${this.path}/:id`, this.usersController.getUserById);

    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Create a new user
     *     tags: [Users]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *             properties:
     *               name:
     *                 type: string
     *                 description: Name of the user
     *                 example: John Doe
     *     responses:
     *       201:
     *         description: User created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       400:
     *         description: Bad request
     */
    this.router.post(`${this.path}`, this.usersController.createUser);

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: Update a user by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *             properties:
     *               name:
     *                 type: string
     *                 description: Name of the user
     *                 example: John Doe
     *     responses:
     *       200:
     *         description: The user was updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *         description: User not found
     *       400:
     *         description: Bad request
     */
    this.router.put(`${this.path}/:id`, this.usersController.updateUser);

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Delete a user by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the question to delete
     *     responses:
     *       200:
     *         description: The user was deleted successfully
     *       404:
     *         description: User not found
     *       400:
     *         description: Bad request
     */

    this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default UsersRoute;
