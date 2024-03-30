"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = tslib_1.__importDefault(require("../databases"));
class UsersService {
    constructor() {
        this.users = _databases_1.default.Users;
    }
    async getAllUsers() {
        return await this.users.findAll();
    }
}
exports.default = UsersService;
//# sourceMappingURL=users.service.js.map