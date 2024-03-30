"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const swagger_ui_express_1 = tslib_1.__importDefault(require("swagger-ui-express"));
const yamljs_1 = tslib_1.__importDefault(require("yamljs"));
const _databases_1 = tslib_1.__importDefault(require("./databases"));
const error_middleware_1 = tslib_1.__importDefault(require("./middlewares/error.middleware"));
class App {
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 8000;
        this.env = process.env.NODE_ENV || "development";
        this.connectToDatabase();
        this.initializeMiddlewares();
        this.initializeErrorHandling();
        this.initializeRoutes(routes);
        this.initializeSwagger();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.info(`=====================================================`);
            console.info(`================ ENV: ${this.env} ===================`);
            console.info(`🚀 App listening on  http://127.0.0.1:${this.port}`);
            console.info(`=====================================================`);
        });
    }
    getServer() {
        return this.app;
    }
    connectToDatabase() {
        _databases_1.default.sequelize.sync({ force: false });
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)({
            origin: "*",
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow these methods
        }));
        this.app.use(express_1.default.json());
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use("/api", route.router);
        });
    }
    initializeErrorHandling() {
        this.app.use(error_middleware_1.default);
    }
    initializeSwagger() {
        const swaggerDocument = yamljs_1.default.load("./swagger.yaml");
        this.app.use("/api/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map