import Application from "express";

import UserController from "./controller";
import UserRepository from "./repository";
import UserRoutes from "./routes";

export default class UserInitializer {
  static registerRoutes(expressApp: Application): void{
    const userRepository: UserRepository = new UserRepository();
    const userController: UserController = new UserController(userRepository);
    const userRoute: UserRoutes = new UserRoutes(userController);

    expressApp.use(userRoute.router);
  }
}
