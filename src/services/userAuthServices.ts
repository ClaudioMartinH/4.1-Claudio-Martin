import { UserRepository } from "../../domain/repositories/UserRepository";

interface UserAuthenticationService {
  authenticate(username: string, password: string): boolean;
}

export { UserAuthenticationService };