import { Request, Response } from "express";

class AppController {
  public ping = (req: Request, res: Response) => {
    try {
      res.status(200).json({
        message: "success",
        error: null,
        data: {
          message: "try /docs to check all listed endpoints",
        },
      });
    } catch (error) {
      console.log("Error in AppController", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };
}

export default AppController;
