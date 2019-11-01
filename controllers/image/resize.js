const jimp = require('jimp');
const path = require('path');

/*
 * Применяет эффект к файлу и сохраняет результирующий файл
 * @param {string} file - путь к файлу
 * @param {string} effect - название применяемого эффекта
 * @param {float} value - значение для применяемого эффекта
 * @return {string} путь к результирующему файлу
 */
async function applyResize({
                           file,
                           value,
                         }) {
  const image = await jimp.read(file);
  const newPath = path.resolve(__dirname, `../../images/resize/${new Date().getTime()}.jpeg`);
  const {w, h} = value;
  image.resize( +w, +h );

  await image.writeAsync(newPath);
  return newPath;
}
// Bla

module.exports = {
  applyResize,
};
