const jimp = require('jimp');
const path = require('path');

/*
 * Применяет эффект к файлу и сохраняет результирующий файл
 * @param {string} file - путь к файлу
 * @param {string} effect - название применяемого эффекта
 * @param {float} value - значение для применяемого эффекта
 * @return {string} путь к результирующему файлу
 */
async function applyCrop({
                           file,
                           value,
                         }) {
  const image = await jimp.read(file);
  const newPath = path.resolve(__dirname, `../../images/crop/${new Date().getTime()}.jpeg`);
  const { x, y, w, h} = value;
  image.crop( +x, +y, +w, +h );

  await image.writeAsync(newPath);
  return newPath;
}


module.exports = {
  applyCrop,
};
