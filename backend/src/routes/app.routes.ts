import { Router } from "express";

import Route from "@interfaces/routes.interface";
import AppController from "@/controllers/app.controller";

class AppRoute implements Route {
  public path = "/";
  public router = Router();
  private appController = new AppController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.appController.ping);
  }
}

export default AppRoute;
