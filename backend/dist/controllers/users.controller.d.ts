import { Request, Response } from "express";
declare class UserController {
    private userService;
    getAllUsers: (req: Request, res: Response) => Promise<void>;
}
export default UserController;
