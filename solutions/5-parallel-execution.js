import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirPath, callback) => {
  fs.readdir(dirPath, (readErr, files) => {
    if (readErr) {
      callback(readErr);
      return;
    }
    const filePaths = files.map(file => path.join(dirPath, file));
    async.map(filePaths, fs.stat, (statErr, stats) => {
      if (statErr) {
        callback(statErr);
        return;
      }
      const fileSizes = stats
        .filter(stat => stat.isFile())
        .map(stat => stat.size);
      const directorySize = _.sumBy(fileSizes, _.identity);
      callback(null, directorySize);
    });
  });
};
// END
