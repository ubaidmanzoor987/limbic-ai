import { Request, Response } from "express";

import UserService from "@/services/users.service";
import { IUsers } from "@/interfaces/users.interface";
import { CreateUserDto } from "@/dtos/users.dto";
import { validate } from "class-validator";

class UserController {
  private userService = new UserService();

  public getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userService.getAllUsers();

      res.status(200).json({
        message: "success",
        error: null,
        data: users,
      });
    } catch (error) {
      console.log("Error in getAllUsers handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
      const user = await this.userService.getUserById(id);
      if (user) {
        res.status(200).json({
          message: "success",
          error: null,
          data: user,
        });
      } else {
        res.status(404).json({
          message: "User not found",
          error: null,
          data: {},
        });
      }
    } catch (error) {
      console.log("Error in getQuestionById handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public createUser = async (req: Request, res: Response) => {
    const userData: Omit<IUsers, "id"> = req.body;
    try {
      const createUserDto = new CreateUserDto();
      createUserDto.name = userData.name;

      const errors = await validate(createUserDto);
      if (errors.length > 0) {
        res
          .status(400)
          .json({ message: "Validation failed", error: errors, data: {} });
        return;
      }
      const newUser = await this.userService.createUser(userData);
      res.status(201).json({
        message: "success",
        error: null,
        data: newUser,
      });
    } catch (error) {
      console.log("Error in createUser handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const updatedData: Partial<IUsers> = req.body;
    try {
      const updatedUser = await this.userService.updateUser(id, updatedData);

      res.status(200).json({
        message: "success",
        error: null,
        data: updatedUser,
      });
    } catch (error) {
      console.log("Error in updatedUser handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
      const deletedCount = await this.userService.deleteUser(id);
      if (deletedCount === 0) {
        res.status(404).json({
          message: "User not found",
          error: null,
          data: {},
        });
      } else {
        res.status(200).json({
          message: "success",
          error: null,
          data: { id },
        });
      }
    } catch (error) {
      console.log("Error in deleteUser handler", error.message);
      res.status(400).json({
        message: "failed",
        error: error.message,
        data: {},
      });
    }
  };
}

export default UserController;
