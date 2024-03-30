import Route from "../interfaces/routes.interface";
declare class UsersRoute implements Route {
    path: string;
    router: import("express-serve-static-core").Router;
    private usersController;
    constructor();
    private initializeRoutes;
}
export default UsersRoute;
