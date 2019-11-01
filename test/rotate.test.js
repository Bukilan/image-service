const path = require('path');
const fs = require('fs');
const rotate = require('../controllers/image/rotate');

describe('rotate controller test', () => {
  test('output should return resize img', () => {
    expect(rotate.applyRotate({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      value: 180,
    }))
      .resolves.toBeDefined();
  });

  test('file should exists', async () => {
    jest.setTimeout(30000);
    const newPath = await rotate.applyRotate({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      value: 180,
    });
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });
});
// bla
