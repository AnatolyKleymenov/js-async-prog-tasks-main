import fsp from 'fs/promises';

// BEGIN
export const reverse = async (filepath) => {
  const data = await fsp.readFile(filepath, 'utf-8');
  const lines = data.trim().split('\n');
  const reversed = lines.reverse().join('\n');
  await fsp.writeFile(filepath, reversed);
};
// END