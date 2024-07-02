import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class UserServices {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async addUser(user: User): Promise<void> {
        this.userRepository.addUser(user);
    }

    async findUserByName(username: string): Promise< User |null > {
        const user = this.userRepository.findUserByName(username);
        return await user
    }
}