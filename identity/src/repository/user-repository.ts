import User from "../model/user";
import UserDatastore from "../datastore/user-datastore";

export default class UserRepository {
  // TODO - verify cache works as expected
  // TODO - add calls to datastore
  private readonly cache: User[] = [];
  private readonly datastore: UserDatastore;

  constructor(datastore: UserDatastore) {
    this.datastore = datastore;

    this.preLoadAllUsers();
  }

  preLoadAllUsers(): void {
    this.datastore.getAll().then((users: User[]) => {
      this.cache.push(...users);
      console.log(
        `Loaded ${this.cache.length} users from ${this.datastore.constructor.name}.`
      );
    });
  }

  add(user: User): User {
    if (this.cache.find((u) => u.id === user.id)) {
      throw new Error("User already exists!");
    }
    this.cache.push(user);
    this.datastore.create(user);
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
    // TODO - consider returning { user: User, ix: number}
    return this.cache.find((user) => user.email === email);
  }

  findById(id: string): User | undefined {
    // TODO - consider returning { user: User, ix: number}
    return this.cache.find((user) => user.id === id);
  }

  update(user: User): User | undefined {
    const ix: number = this.cache.findIndex((u) => u.id === user.id);
    if (ix !== -1) {
      this.cache[ix] = user;
    } else {
      this.add(user);
    }
    this.datastore.update(user);
    return this.findById(user.id);
  }

  delete(id: string): boolean {
    const ix: number = this.cache.findIndex((u) => u.id === id);
    if (ix !== -1) {
      this.cache.splice(ix, 1);
    }
    this.datastore.delete(id);
    return ix !== -1;
  }

  getAll(): User[] {
    return this.cache;
  }
}
