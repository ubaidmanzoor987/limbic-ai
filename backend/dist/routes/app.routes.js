"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const app_controller_1 = tslib_1.__importDefault(require("@/controllers/app.controller"));
class AppRoute {
    constructor() {
        this.path = "/";
        this.router = (0, express_1.Router)();
        this.appController = new app_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.appController.ping);
    }
}
exports.default = AppRoute;
//# sourceMappingURL=app.routes.js.map