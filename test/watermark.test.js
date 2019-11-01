const path = require('path');
const fs = require('fs');
const controller = require('../controllers/image/watermark');

describe('watermark controller test', () => {
  test('output path should be not null', () => {
    expect(controller.simpleWatermark(path.resolve(__dirname, './testImages/pic.jpg')))
      .resolves.toBeDefined();
  });

  test('file should exists', async () => {
    jest.setTimeout(30000);
    const newPath = await controller.simpleWatermark(path.resolve(__dirname, './testImages/pic.jpg'));
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });
});
