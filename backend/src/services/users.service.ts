import { IUsers } from "@/interfaces/users.interface";
import DB from "@databases";

class UsersService {
  private users = DB.Users;

  public async getAllUsers(): Promise<IUsers[]> {
    return await this.users.findAll();
  }

  public async getUserById(id: string): Promise<IUsers | null> {
    return await this.users.findByPk(id);
  }

  public async createUser(userData: Omit<IUsers, "id">): Promise<IUsers> {
    return await this.users.create(userData);
  }

  public async updateUser(
    id: string,
    updatedData: Partial<IUsers>
  ): Promise<IUsers> {
    const resp = await this.users.update(updatedData, { where: { id } });
    return await this.getUserById(id);
  }

  public async deleteUser(id: string): Promise<number> {
    return await this.users.destroy({ where: { id } });
  }
}

export default UsersService;
