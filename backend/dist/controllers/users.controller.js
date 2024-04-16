"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const users_service_1 = tslib_1.__importDefault(require("@/services/users.service"));
const users_dto_1 = require("@/dtos/users.dto");
const class_validator_1 = require("class-validator");
class UserController {
    constructor() {
        this.userService = new users_service_1.default();
        this.getAllUsers = async (req, res) => {
            try {
                const users = await this.userService.getAllUsers();
                res.status(200).json({
                    message: "success",
                    error: null,
                    data: users,
                });
            }
            catch (error) {
                console.log("Error in getAllUsers handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.getUserById = async (req, res) => {
            const id = req.params.id;
            try {
                const user = await this.userService.getUserById(id);
                if (user) {
                    res.status(200).json({
                        message: "success",
                        error: null,
                        data: user,
                    });
                }
                else {
                    res.status(404).json({
                        message: "User not found",
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
        this.createUser = async (req, res) => {
            const userData = req.body;
            try {
                const createUserDto = new users_dto_1.CreateUserDto();
                createUserDto.name = userData.name;
                const errors = await (0, class_validator_1.validate)(createUserDto);
                if (errors.length > 0) {
                    res
                        .status(400)
                        .json({ message: "Validation failed", error: errors, data: {} });
                    return;
                }
                const newUser = await this.userService.createUser(userData);
                res.status(201).json({
                    message: "success",
                    error: null,
                    data: newUser,
                });
            }
            catch (error) {
                console.log("Error in createUser handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.updateUser = async (req, res) => {
            const id = req.params.id;
            const updatedData = req.body;
            try {
                const updatedUser = await this.userService.updateUser(id, updatedData);
                res.status(200).json({
                    message: "success",
                    error: null,
                    data: updatedUser,
                });
            }
            catch (error) {
                console.log("Error in updatedUser handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
        this.deleteUser = async (req, res) => {
            const id = req.params.id;
            try {
                const deletedCount = await this.userService.deleteUser(id);
                if (deletedCount === 0) {
                    res.status(404).json({
                        message: "User not found",
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
                console.log("Error in deleteUser handler", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=users.controller.js.map