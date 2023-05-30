import fs from 'fs';

// BEGIN
export const move = (source, destination, callback) => {
  fs.readFile(source, (readErr, data) => {
    if (readErr) {
      callback(readErr);
      return;
    }
    fs.writeFile(destination, data, writeErr => {
      if (writeErr) {
        callback(writeErr);
        return;
      }
      fs.unlink(source, unlinkErr => {
        if (unlinkErr) {
          callback(unlinkErr);
          return;
        }
        callback(null);
      });
    });
  });
};
// END
