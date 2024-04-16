import { Request, Response } from "express";
declare class AppController {
    ping: (req: Request, res: Response) => void;
}
export default AppController;
