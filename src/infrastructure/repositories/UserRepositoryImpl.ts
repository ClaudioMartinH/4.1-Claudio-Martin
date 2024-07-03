import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  get getUsers(): User[] {
    return [...this.users]
  }

  async addUser(user: User): Promise<void> {
    this.users.push(user)
  }
  async findUserByName(username: string): Promise<User | null> {
    const user = this.users.find(user => user.username === username)
    return user || null
  }
 }