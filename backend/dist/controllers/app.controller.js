"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    constructor() {
        this.getAll = (req, res) => {
            try {
                res
                    .status(200)
                    .json({ success: true, message: "success", error: null, data: {} });
            }
            catch (error) {
                console.log("Error in AppController", error.message);
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
exports.default = AppController;
//# sourceMappingURL=app.controller.js.map