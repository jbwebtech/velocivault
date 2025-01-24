const fs = require("fs");
const path = require("path");

const BASE_DIR_PATH = "./mock/";
const USERS_DIR_PATH = path.join(BASE_DIR_PATH, "users");

const readItemsFromDir = (dirPath) => {
  const items = [];
  fs.readdirSync(dirPath).forEach((filename) => {
    let fileData = fs.readFileSync(path.join(dirPath, filename));
    let json = JSON.parse(fileData); // array of users
    items.push(...json);
  });
  return items;
};

const getUsers = () => {
  return readItemsFromDir(USERS_DIR_PATH);
};

module.exports = {
  getUsers
};