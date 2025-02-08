import Application from "express";

import UserController from "./controller";
import UserRepository from "./repository";
import UserRoutes from "./routes";
import UserDatastore from "./datastore";
import MockUserDatastore from "./mock-datastore";

export default class UserInitializer {
  static registerRoutes(expressApp: Application): void{
    const userDatastore: UserDatastore = new MockUserDatastore();
    const userRepository: UserRepository = new UserRepository(userDatastore);
    const userController: UserController = new UserController(userRepository);
    const userRoute: UserRoutes = new UserRoutes(userController);

    expressApp.use(userRoute.router);
  }
}
