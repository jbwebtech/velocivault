import {Application} from "express";

import UserController from "../controller/user-controller";
import UserRepository from "../repository/user-repository";
import UserRoutes from "../route/user-routes";
import UserDatastore from "../datastore/user-datastore";
import MockUserDatastore from "../datastore/mock-user-datastore";

export default class UserInitializer {
  static registerRoutes(expressApp: Application): void{
    const userDatastore: UserDatastore = new MockUserDatastore();
    const userRepository: UserRepository = new UserRepository(userDatastore);
    const userController: UserController = new UserController(userRepository);
    const userRoute: UserRoutes = new UserRoutes(userController);

    expressApp.use(userRoute.router);
  }
}
