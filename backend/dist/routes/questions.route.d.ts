import Route from "../interfaces/routes.interface";
declare class QuestionsRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    private questionsController;
    constructor();
    private initializeRoutes;
}
export default QuestionsRoute;
