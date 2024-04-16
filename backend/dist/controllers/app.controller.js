"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    constructor() {
        this.ping = (req, res) => {
            try {
                res.status(200).json({
                    message: "success",
                    error: null,
                    data: {
                        message: "try /docs to check all listed endpoints",
                    },
                });
            }
            catch (error) {
                console.log("Error in AppController", error.message);
                res.status(400).json({
                    message: "failed",
                    error: error.message,
                    data: {},
                });
            }
        };
    }
}
exports.default = AppController;
//# sourceMappingURL=app.controller.js.map