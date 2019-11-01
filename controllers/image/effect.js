const jimp = require('jimp');
const path = require('path');

/*
 * Применяет эффект к файлу и сохраняет результирующий файл
 * @param {string} file - путь к файлу
 * @param {string} effect - название применяемого эффекта
 * @param {float} value - значение для применяемого эффекта
 * @return {string} путь к результирующему файлу
 */
async function useEffect({
  file,
  effect,
  value,
}) {
  const image = await jimp.read(file);
  const newPath = path.resolve(__dirname, `../../images/effect/${new Date().getTime()}.jpeg`);

  switch (effect) {
    case 'grayscale':
    default:
      await image.greyscale();
      break;
    case 'brightness':
      await image.brightness(value || 0);
      break;
    case 'contrast':
      await image.contrast(value || 0);
      break;
    case 'invert':
      await image.invert();
      break;
    case 'mythic':
      await image.dither565();
      break;
    case 'normalize':
      await image.normalize();
      break;
    case 'sepia':
      await image.sepia();
      break;
    case 'posterize':
      await image.posterize(value || 1);
      break;
    case 'pixelate':
      await image.pixelate(value || 10);
      break;
  }
  await image.writeAsync(newPath);
  return newPath;
}


module.exports = {
  useEffect,
};
