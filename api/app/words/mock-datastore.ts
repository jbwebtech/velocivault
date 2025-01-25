import fs from 'fs';
import path from 'path';

const BASE_DIR_PATH = path.join(process.env.ASSETS_PATH || "./assets", "data", "mock");
const NOUNS_DIR_PATH = path.join(BASE_DIR_PATH, 'nouns');
const VERBS_DIR_PATH = path.join(BASE_DIR_PATH, 'verbs');
const ADVERBS_DIR_PATH = path.join(BASE_DIR_PATH, 'adverbs');
const ADJECTIVES_DIR_PATH = path.join(BASE_DIR_PATH, 'adjectives');
const SPECIAL_CHARACTERS_DIR_PATH = path.join(BASE_DIR_PATH, 'chars');

const readItemsFromDir = (dirPath: string): any[] => {
  const items: any[] = [];
  fs.readdirSync(dirPath).forEach((filename: string) => {
    const fileData: Buffer = fs.readFileSync(path.join(dirPath, filename));
    const json: any[] = JSON.parse(fileData.toString()) as any[]; // array of words
    items.push(...json);
  });
  return items;
};

export const getNouns = (): any[] => readItemsFromDir(NOUNS_DIR_PATH);

export const getVerbs = (): any[] => readItemsFromDir(VERBS_DIR_PATH);

export const getAdverbs = (): any[] => readItemsFromDir(ADVERBS_DIR_PATH);

export const getAdjectives = (): any[] => readItemsFromDir(ADJECTIVES_DIR_PATH);

export const getSpecialCharacters = (): any[] => readItemsFromDir(SPECIAL_CHARACTERS_DIR_PATH);
