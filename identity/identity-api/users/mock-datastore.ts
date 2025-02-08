import fs from "fs";
import path from "path";

import User from "../model/user";
import UserDatastore from "./datastore";

const BASE_DIR_PATH = path.join((process.env.ASSETS_PATH || "./assets"), "data", "mock");
const USERS_DIR_PATH = path.join(BASE_DIR_PATH, "users");

export default class MockUserDatastore implements UserDatastore {
  constructor() {
    if (!fs.existsSync(BASE_DIR_PATH)) {
      throw new Error(
        `The directory ${BASE_DIR_PATH} does not exist. Please check the environment variable ASSETS_PATH.`
      );
    }

    if (!fs.existsSync(USERS_DIR_PATH)) {
      throw new Error(
        `The directory ${USERS_DIR_PATH} does not exist. Please check the environment variable ASSETS_PATH.`
      );
    }

    readItemsFromDirSync(USERS_DIR_PATH);
  }

  async getAll(): Promise<User[]> {
    return readItemsFromDirSync(USERS_DIR_PATH);
  }

  async findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  async findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  async create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string | User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

const readItemsFromDirSync = (dirPath: string): any[] => {
  const items: any[] = [];
  fs.readdirSync(dirPath).forEach((filename: string) => {
    const fileData: Buffer = fs.readFileSync(path.join(dirPath, filename));
    const json: any[] = JSON.parse(fileData.toString()); // array of users
    items.push(...json);
  });
  return items;
};
