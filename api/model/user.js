class User {
  constructor(name, email, password) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = User;
