"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbConfig = void 0;
const getDbConfig = () => {
    var _a;
    let dbConfig = {};
    try {
        dbConfig.host = process.env.DATABASE_HOST;
        dbConfig.port = (_a = Number(process.env.DATABASE_PORT)) !== null && _a !== void 0 ? _a : 5432;
        dbConfig.database = process.env.DATABASE_NAME;
        dbConfig.user = process.env.DATABASE_USER;
        dbConfig.password = process.env.DATABASE_PASSWORD;
        console.log({ dbConfig });
        return dbConfig;
    }
    catch (error) {
        console.log({ error });
        throw new Error("Unable to read database name, port, host, password from .env");
    }
};
exports.getDbConfig = getDbConfig;
//# sourceMappingURL=index.js.map