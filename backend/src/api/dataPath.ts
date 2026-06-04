import path from 'path';

export const getDataDir = () =>
  process.env.DATA_DIR
    ? path.resolve(process.env.DATA_DIR)
    : path.join(__dirname, '../data');

export const dataFile = (filename: string) =>
  path.join(getDataDir(), filename);