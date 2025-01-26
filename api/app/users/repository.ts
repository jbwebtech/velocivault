import User from '../model/user';
import * as mockData from './mock-datastore';

export default class UserRepository {
  private readonly users: User[] = [];

  constructor() {
    this.users = [];
    this.loadMockData();
  }

  loadMockData(): void {
    this.users.push(...mockData.getUsers());
    console.log("Mock data loaded: Users");
  }

  add(user: User): User {
    if (this.users.find((u) => u.id === user.id)) {
      throw new Error("User already exists!");
    }
    this.users.push(user);
    return user;
  }

  create(name: string, email: string, password: string): User {
    if (!name || !email || !password) {
      throw new Error("Invalid user data!");
    }

    const user: User = new User(name, email, password);
    this.add(user);
    return user;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  update(user: User): User | undefined {
    const ix: number = this.users.findIndex((u) => u.id === user.id);
    if (ix !== -1) {
      this.users[ix] = user;
    } else {
      this.add(user);
    }
    return this.findById(user.id);
  }

  delete(id: string): boolean {
    const ix: number = this.users.findIndex((u) => u.id === id);
    if (ix !== -1) {
      this.users.splice(ix, 1);
    }
    return (ix !== -1);
  }

  getAll(): User[] {
    return this.users;
  }
}
