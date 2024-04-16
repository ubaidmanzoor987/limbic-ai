"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = tslib_1.__importDefault(require("swagger-jsdoc"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const _databases_1 = tslib_1.__importDefault(require("@databases"));
const error_middleware_1 = tslib_1.__importDefault(require("@middlewares/error.middleware"));
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 8000;
        this.env = process.env.NODE_ENV || "development";
        this.appUrl =
            this.env === "development"
                ? `http://localhost:${this.port}`
                : `/${this.port}`;
        this.connectToDatabase();
        this.initializeSwagger();
        this.initializeMiddlewares();
        this.initializeErrorHandling();
        this.initializeRoutes(routes);
    }
    connectToDatabase() {
        _databases_1.default.sequelize.sync({ force: false });
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(route.router);
        });
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
    initializeSwagger() {
        const swaggerOptions = {
            definition: {
                openapi: "3.0.0",
                info: {
                    title: "Limbic Ai",
                    version: "1.0.0",
                    description: "API documentation for Limbic Ai",
                },
                servers: [
                    {
                        url: this.appUrl,
                    },
                ],
            },
            apis: [`${__dirname}/routes/*.ts`],
        };
        const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
        this.app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocs));
    }
    getServer() {
        return this.app;
    }
    listen() {
        this.app.listen(this.port, () => {
            console.info(`=====================================================`);
            console.info(`================ ENV: ${this.env} ===================`);
            console.info(`🚀 App listening on  ${this.appUrl}/docs`);
            console.info(`=====================================================`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map