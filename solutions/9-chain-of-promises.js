import fsp from 'fs/promises';

// BEGIN
export const getTypes = (paths) => {
  const processPath = (path) => fsp.stat(path)
    .then((stats) => (stats.isDirectory() ? 'directory' : 'file'))
    .catch(() => null);
    
  const promises = paths.map(processPath);

  return Promise.all(promises);
};
// END