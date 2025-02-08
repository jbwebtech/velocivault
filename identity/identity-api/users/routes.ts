import { Request, Response, Router } from 'express';
import UserController from './controller';

export default class UserRoutes {
  public router: Router = Router();

  constructor(private userController: UserController) {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(501).send("Identity API service not implemented at this URL");
    });
    this.router.get("/api/v1/users", this.userController.getAllUsers.bind(this.userController));
    this.router.get("/api/v1/users/:id", this.userController.getUserById.bind(this.userController));
    this.router.post("/api/v1/users", this.userController.createUser.bind(this.userController));
    this.router.put("/api/v1/users/:id", this.userController.updateUser.bind(this.userController));
    this.router.delete("/api/v1/users/:id", this.userController.deleteUser.bind(this.userController));
  }
}
