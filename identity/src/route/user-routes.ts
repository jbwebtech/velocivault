import { Router } from "express";
import UserController from "../controller/user-controller";

export default class UserRoutes {
  public router: Router = Router();

  constructor(private userController: UserController) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // GET /api/v1/users - returns an array of all users
    this.router.get(
      "/api/v1/users",
      this.userController.getAll.bind(this.userController)
    );

    // GET /api/v1/users/:id - returns a user by id
    this.router.get(
      "/api/v1/users/:id",
      this.userController.findById.bind(this.userController)
    );

    // POST /api/v1/users - create a new user
    this.router.post(
      "/api/v1/users",
      this.userController.create.bind(this.userController)
    );

    // PUT /api/v1/users/:id - update a user
    this.router.put(
      "/api/v1/users/:id",
      this.userController.replaceById.bind(this.userController)
    );

    // PATCH /api/v1/users/:id - partial update a user
    this.router.patch(
      "/api/v1/users/:id",
      this.userController.updateById.bind(this.userController)
    );

    // DELETE /api/v1/users/:id - delete a user
    this.router.delete(
      "/api/v1/users/:id",
      this.userController.deleteById.bind(this.userController)
    );
  }
}
