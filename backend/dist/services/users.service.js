"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _databases_1 = tslib_1.__importDefault(require("@databases"));
class UsersService {
    constructor() {
        this.users = _databases_1.default.Users;
    }
    async getAllUsers() {
        return await this.users.findAll();
    }
    async getUserById(id) {
        return await this.users.findByPk(id);
    }
    async createUser(userData) {
        return await this.users.create(userData);
    }
    async updateUser(id, updatedData) {
        const resp = await this.users.update(updatedData, { where: { id } });
        return await this.getUserById(id);
    }
    async deleteUser(id) {
        return await this.users.destroy({ where: { id } });
    }
}
exports.default = UsersService;
//# sourceMappingURL=users.service.js.map