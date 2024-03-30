"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("dotenv/config");
const dotenv_1 = require("dotenv");
const app_1 = tslib_1.__importDefault(require("./app"));
const questions_route_1 = tslib_1.__importDefault(require("./routes/questions.route"));
const users_route_1 = tslib_1.__importDefault(require("./routes/users.route"));
(0, dotenv_1.parse)(".env");
const app = new app_1.default([new questions_route_1.default(), new users_route_1.default()]);
app.listen();
exports.default = app.app;
//# sourceMappingURL=server.js.map