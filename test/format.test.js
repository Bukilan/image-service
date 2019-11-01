const path = require('path');
const fs = require('fs');
const controller = require('../controllers/image/format');

describe('format controller test', () => {
  test('output path should be not null', () => {
    expect(controller.formatFile({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      outputFormat: 'png',
    }))
      .resolves.toBeDefined();
  });

  test('file should exists(png)', async () => {
    jest.setTimeout(30000);
    const newPath = await controller.formatFile({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      outputFormat: 'png',
    });
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });

  test('file should exists(bmp)', async () => {
    jest.setTimeout(30000);
    const newPath = await controller.formatFile({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      outputFormat: 'bmp',
    });
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });
});
