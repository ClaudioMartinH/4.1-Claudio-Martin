import { Request, Response } from "express";
import { UserRepositoryImpl } from "../../domain/repositories/UserRepositoryImpl";
import { UserServices } from "../../application/services/userServices";
import { User } from "../../domain/entities/User";
import error404 from "../../infrastructure/controllers/errorController"

const userRepository = new UserRepositoryImpl();

export class UserController {
    public async addUser(req: Request, res: Response) {
        try {
            const userService = new UserServices(userRepository);
            const user: User = req.body
            await userService.addUser(user)
            res
        .status(201)
        .json({ message: "New user created succesfully" });
        } catch (error) {
            res.status(500).json({ error: "There was an 500 error" });
        }
    }

    public async findUserByName(req: Request, res: Response) {
        try {
            const userService = new UserServices(userRepository);
            const username = req.body
            const userByName = await userService.findUserByName(username);
            if (!userByName) {
                return error404;
              }
              res.status(200).json(userByName);
        } catch (error) {
            res.status(500).json({ error: "There was an 500 error" });
        }
    }
}