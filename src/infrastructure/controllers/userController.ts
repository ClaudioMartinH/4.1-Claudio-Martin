import { Request, Response } from "express";
import { UserRepositoryImpl } from "../../infrastructure/repositories/UserRepositoryImpl";
import { UserServices } from "../../application/services/userServices";
import { User } from "../../domain/entities/User";
import error404 from "../../infrastructure/controllers/errorController";

const userRepository = new UserRepositoryImpl();

export class UserController {
  public async addUser(req: Request, res: Response) {
    try {
      const userService = new UserServices(userRepository);

      const { username, password } = req.body as Pick<
        User,
        "username" | "password"
      >;

      if (!username || !password) {
        return res
          .status(400)
          .json({ error: "Username and password are required" });
      }

      const newUser: User = {
        username,
        password,
      };

      await userService.addUser(newUser);

      res.status(201).json({ message: "New user created successfully" });
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).json({ error: "There was a 500 error" });
    }
  }

  public async findUserByName(req: Request, res: Response) {
    try {
      const userService = new UserServices(userRepository);
      const { username } = req.params;

      const userByName = await userService.findUserByName(username);
      if (!userByName) {
        return error404;
      }
      res.status(200).json(userByName);
    } catch (error) {
      console.error("Error finding user by name:", error);
      res.status(500).json({ error: "There was a 500 error" });
    }
  }
}

// import { Request, Response } from "express";
// import { UserRepositoryImpl } from "../../domain/repositories/UserRepositoryImpl";
// import { UserServices } from "../../application/services/userServices";
// import { User } from "../../domain/entities/User";
// import error404 from "../../infrastructure/controllers/errorController"

// const userRepository = new UserRepositoryImpl();

// export class UserController {
//     public async addUser(req: Request, res: Response) {
//         try {
//             const userService = new UserServices(userRepository);
//             const user: User = req.body
//             await userService.addUser(user)
//             res
//         .status(201)
//         .json({ message: "New user created succesfully" });
//         } catch (error) {
//             res.status(500).json({ error: "There was an 500 error" });
//         }
//     }

//     public async findUserByName(req: Request, res: Response) {
//         try {
//             const userService = new UserServices(userRepository);
//             const username = req.body
//             const userByName = await userService.findUserByName(username);
//             if (!userByName) {
//                 return error404;
//               }
//               res.status(200).json(userByName);
//         } catch (error) {
//             res.status(500).json({ error: "There was an 500 error" });
//         }
//     }
// }
