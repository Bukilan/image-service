const path = require('path');
const fs = require('fs');
const resize = require('../controllers/image/resize');

describe('resize controller test', () => {
  test('output should return resize img', () => {
    expect(resize.applyResize({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      value: {w: 100, h:100},
    }))
      .resolves.toBeDefined();
  });

  test('file should exists', async () => {
    jest.setTimeout(30000);
    const newPath = await resize.applyResize({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      value: {w: 100, h:100}
    });
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });
});
// bla
