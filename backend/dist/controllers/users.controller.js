"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const users_service_1 = tslib_1.__importDefault(require("../services/users.service"));
class UserController {
    constructor() {
        this.userService = new users_service_1.default();
        this.getAllUsers = async (req, res) => {
            try {
                const users = await this.userService.getAllUsers();
                res.status(200).json({
                    status: true,
                    message: "success",
                    error: null,
                    data: users,
                });
            }
            catch (error) {
                console.log("Error in getAllUsers handler", error.message);
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
exports.default = UserController;
//# sourceMappingURL=users.controller.js.map