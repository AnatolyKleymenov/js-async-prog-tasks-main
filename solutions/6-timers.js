import fs from 'fs';

// BEGIN
const watch = (filepath, interval, callback) => {
  let lastModified;

  const checkFile = () => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        callback(err);
        clearInterval(id);
        return;
      }
      if (lastModified && stats.mtimeMs > lastModified) {
        callback(null);
      }
      lastModified = stats.mtimeMs;
    });
  };

  checkFile();
  const id = setInterval(checkFile, interval);
  return id;
};

export default watch;
// END
