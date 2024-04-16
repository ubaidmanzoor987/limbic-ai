"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const dotenv_1 = require("dotenv");
const app_1 = tslib_1.__importDefault(require("@/app"));
const app_routes_1 = tslib_1.__importDefault(require("@/routes/app.routes"));
const questions_routes_1 = tslib_1.__importDefault(require("@/routes/questions.routes"));
const users_routes_1 = tslib_1.__importDefault(require("@/routes/users.routes"));
const answers_routes_1 = tslib_1.__importDefault(require("@/routes/answers.routes"));
(0, dotenv_1.parse)(".env");
const app = new app_1.default([
    new app_routes_1.default(),
    new answers_routes_1.default(),
    new users_routes_1.default(),
    new questions_routes_1.default(),
]);
app.listen();
exports.default = app.app;
//# sourceMappingURL=server.js.map