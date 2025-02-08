import 'dotenv/config';
import { Application, Request, Response, Router } from 'express';
import express from 'express';
import bodyParser from 'body-parser';

import UserRepository from './users/repository';
import User from './model/user';

// UserController class
class UserController {
  constructor(private userRepository: UserRepository) {}

  getAllUsers(req: Request, res: Response<User[]>): void {
    res.json(this.userRepository.getAll());
  }

  getUserById(req: Request, res: Response<User>): void {
    const user: User = this.userRepository.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  }

  createUser(req: Request, res: Response<User>): void {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("Missing user information");
    }
    const newUser: User = this.userRepository.create(name, email, password);
    res.status(201).json(newUser);
  }

  updateUser(req: Request, res: Response<User>): void {
    const user: User = this.userRepository.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const { name, email, password } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    res.json(this.userRepository.update(user));
  }

  deleteUser(req: Request, res: Response<void>): void {
    const user: User = this.userRepository.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    this.userRepository.delete(user.id);
    res.status(204).send();
  }
}

// UserRoute class
class UserRoute {
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

const identity: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3006;
const userRepository: UserRepository = new UserRepository();
const userController: UserController = new UserController(userRepository);
const userRoute: UserRoute = new UserRoute(userController);

identity.use(bodyParser.json());
identity.use(userRoute.router);

identity.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
