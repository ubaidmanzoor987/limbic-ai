import express from "express";
import Routes from "@interfaces/routes.interface";
declare class App {
    private port;
    private env;
    private appUrl;
    app: express.Application;
    constructor(routes: Routes[]);
    private connectToDatabase;
    private initializeMiddlewares;
    private initializeRoutes;
    private initializeErrorHandling;
    private initializeSwagger;
    getServer(): express.Application;
    listen(): void;
}
export default App;
