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

    if (!user.id || !user.name || !user.email || !user.password) {
      throw new Error("Invalid user data!");
    }

    this.users.push(user);
  }

  create(name, email, password) {
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

  all() {
    return this.users;
  }
}

module.exports = UserRepository;
