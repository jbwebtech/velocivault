import fs from 'fs';
import path from 'path';

const BASE_DIR_PATH = "./mock/";
const USERS_DIR_PATH = path.join(BASE_DIR_PATH, "users");

const readItemsFromDir = (dirPath: string): any[] => {
  const items: any[] = [];
  fs.readdirSync(dirPath).forEach((filename: string) => {
    const fileData: Buffer = fs.readFileSync(path.join(dirPath, filename));
    const json: any[] = JSON.parse(fileData.toString()); // array of users
    items.push(...json);
  });
  return items;
};

export const getUsers = (): any[] => {
  return readItemsFromDir(USERS_DIR_PATH);
};
