import fs from 'fs';

// BEGIN
const write = (path, data, callback) => {
  fs.writeFile(path, data, err => {
    if (err) {
      console.log(`Ошибка записи: ${err}`);
    }
    else {
    callback();
    }
  });
};

export default write;
// END