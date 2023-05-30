import fs from 'fs';

const print = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Ошибка чтения файла: ${err}`);
  }
};

export default print;
