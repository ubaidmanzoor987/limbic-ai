import { IUsers } from "../interfaces/users.interface";
declare class UsersService {
    private users;
    getAllUsers(): Promise<IUsers[]>;
}
export default UsersService;
