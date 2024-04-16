import { IUsers } from "@/interfaces/users.interface";
declare class UsersService {
    private users;
    getAllUsers(): Promise<IUsers[]>;
    getUserById(id: string): Promise<IUsers | null>;
    createUser(userData: Omit<IUsers, "id">): Promise<IUsers>;
    updateUser(id: string, updatedData: Partial<IUsers>): Promise<IUsers>;
    deleteUser(id: string): Promise<number>;
}
export default UsersService;
