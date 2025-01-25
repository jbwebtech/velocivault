const User = require("../model/user");
const mockData = require("./mock-datastore");

class UserRepository {
  constructor() {
    this.users = [];
    this.loadMockData();
  }

  loadMockData() {
    this.users.push(...mockData.getUsers());
    console.log("Mock data loaded.");
  }

  add(user) {
    if (!user instanceof User) {
      throw new Error("Invalid user type!  Must be an instance of User");
    }

    this.create(user.name, user.email, user.password);

    this.users.push(user);
  }

  create(name, email, password) {
    if (!name || !email || !password) {
      throw new Error("Invalid user data!");
    }

    const user = new User(name, email, password);
    this.add(user);
    return user;
  }

  findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  findById(id) {
    return this.users.find((user) => user.id === id);
  }

  update(user) {
    const ix = this.users.findIndex((u) => u.id === user.id);
    if (ix !== -1) {
      this.users[ix] = user;
    } else {
      this.add(user);
    }
    return this.findById(user.id);
  }

  delete(id) {
    const ix = this.users.findIndex((u) => u.id === id);
    if (ix !== -1) {
      this.users.splice(ix, 1);
    }
  }

  getAll() {
    return this.users;
  }
}

module.exports = UserRepository;
