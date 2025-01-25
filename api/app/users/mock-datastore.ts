import fs from 'fs';
import path from 'path';

const BASE_DIR_PATH = path.join(process.env.ASSETS_PATH || "./assets", "data", "mock");
const USERS_DIR_PATH = path.join(BASE_DIR_PATH, "users");

const readItemsFromDir = (dirPath: string): any[] => {
  console.log(`Reading mock Users from: ${dirPath}`);
  console.log(`process.cwd() is : ${process.cwd()}`);
  console.log(`__dirname is: ${__dirname}`);
  console.log(`path.join(BASE_DIR_PATH, 'nouns') is: ${path.join(BASE_DIR_PATH, 'nouns')}`);
  console.log(`Completed reading files from: ${dirPath}`);
  console.log('---------------------------------------------')

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
