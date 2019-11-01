const jimp = require('jimp');
const path = require('path');


/*
 * Меняет ватермарку для файла
 * @param {string} file - путь к файлу
 * @param {string} watermark - путь к ватермарке
 * @param {int} waretmarkX - координата X ватермарки
 * @param {int} waretmarkY - координата Y ватермарки
 * @param {int} waretmarkW - ширина ватермарки
 * @param {int} waretmarkH - высота ватермарки
 * @return {string} путь к результирующему файлу
 */

async function createWatermark({
  file,
  watermark,
  watermarkX,
  watermarkY,
  watermarkH,
  watermarkW,
}) {
  const image = await jimp.read(file);
  const watermarkYandex = await jimp.read(watermark);
  await watermarkYandex.contain(watermarkW, watermarkH);
  await image.blit(watermarkYandex, watermarkX, watermarkY);

  const newPath = path.resolve(__dirname, `../../images/watermark/${new Date().getTime()}.jpeg`);
  await image.writeAsync(newPath);
  return newPath;
}

function simpleWatermark(_path) {
  return createWatermark({
    file: _path,
    watermark: path.resolve(__dirname, '../../images/yandex.png'),
    watermarkH: 64,
    watermarkW: 64,
    watermarkX: 0,
    watermarkY: 0,
  });
}

function customWatermark({
  watermark,
  file,
  x,
  y,
  w,
  h,
}) {
  return createWatermark({
    file,
    watermark,
    watermarkH: h || 64,
    watermarkW: w || 64,
    watermarkX: x || 0,
    watermarkY: y || 0,
  });
}


module.exports = {
  simpleWatermark,
  customWatermark,
};
