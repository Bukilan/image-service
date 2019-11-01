const jimp = require('jimp');
const path = require('path');


/*
 * Меняет формат файла
 * @param {string} file - путь к файлу
 * @param {string} outputFormat - формат выходного файла
 * @return {string} путь к результирующему файлу
 */

async function formatFile({
  file,
  outputFormat,
}) {
  const image = await jimp.read(file);
  let newPath = path.resolve(__dirname, `../../images/effect/${new Date().getTime()}`);

  switch ((outputFormat || '').toLowerCase()) {
    case 'png':
    default:
      newPath += '.png';
      break;
    case 'jpeg':
      newPath += '.jpeg';
      break;
    case 'bmp':
      newPath += '.bmp';
      break;
  }
  await image.writeAsync(newPath);
  return newPath;
}


module.exports = {
  formatFile,
};
