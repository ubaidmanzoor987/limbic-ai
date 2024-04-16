import Route from "@interfaces/routes.interface";
declare class AppRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    private appController;
    constructor();
    private initializeRoutes;
}
export default AppRoute;
