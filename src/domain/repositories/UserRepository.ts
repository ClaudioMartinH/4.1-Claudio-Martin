import { User } from "../entities/User"

export interface UserRepository {
  findUserByName(username: string): Promise<User | null>;
  addUser(user: User): Promise<void>;
}