const path = require('path');
const fs = require('fs');
const controller = require('../controllers/image/effect');

describe('effect controller test', () => {
  test('output path should be not null', () => {
    expect(controller.useEffect({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      effect: 'sepia',
    }))
      .resolves.toBeDefined();
  });

  test('file should exists(sepia)', async () => {
    jest.setTimeout(30000);
    const newPath = await controller.useEffect({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      effect: 'sepia',
    });
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });

  test('file should exists(maxContrast)', async () => {
    jest.setTimeout(30000);
    const newPath = await controller.useEffect({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      effect: 'contrast',
      value: 1,
    });
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });
});
