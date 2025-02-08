import Router from 'express';
import UserController from './controller';

export default class UserRoutes {
  public router: Router = Router();

  constructor(private userController: UserController) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // GET /api/v1/users - returns an array of all users
    this.router.get("/api/v1/users", this.userController.getAllUsers.bind(this.userController));

    // GET /api/v1/users/:id - returns a user by id
    this.router.get("/api/v1/users/:id", this.userController.getUserById.bind(this.userController));

    // POST /api/v1/users - create a new user
    this.router.post("/api/v1/users", this.userController.createUser.bind(this.userController));

    // PUT /api/v1/users/:id - update a user
    this.router.put("/api/v1/users/:id", this.userController.updateUser.bind(this.userController));

    // DELETE /api/v1/users/:id - delete a user
    this.router.delete("/api/v1/users/:id", this.userController.deleteUser.bind(this.userController));
  }
}
