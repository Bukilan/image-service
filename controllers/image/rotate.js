const jimp = require('jimp');
const path = require('path');

/*
 * Применяет эффект к файлу и сохраняет результирующий файл
 * @param {string} file - путь к файлу
 * @param {string} effect - название применяемого эффекта
 * @param {float} value - значение для применяемого эффекта
 * @return {string} путь к результирующему файлу
 */
async function applyRotate({
                             file,
                             value,
                           }) {
  const image = await jimp.read(file);
  const newPath = path.resolve(__dirname, `../../images/resize/${new Date().getTime()}.jpeg`);
  image.rotate( +value );

  await image.writeAsync(newPath);
  return newPath;
}


module.exports = {
  applyRotate,
};
