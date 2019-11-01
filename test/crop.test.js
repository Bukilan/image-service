const path = require('path');
const fs = require('fs');
const crop = require('../controllers/image/crop');

describe('crop controller test', () => {
  test('output should return croped img', () => {
    expect(crop.applyCrop({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      value: JSON.stringify({"x":50, "y":50, "w": 100, "h":100}),
    }))
      .resolves.toBeDefined();
  });

  test('file should exists', async () => {
    jest.setTimeout(30000);
    const newPath = await crop.applyCrop({
      file: path.resolve(__dirname, './testImages/pic.jpg'),
      value: JSON.stringify({"x":50, "y":50, "w": 100, "h":100}),
    });
    const exists = fs.existsSync(newPath);
    return expect(exists).toBeTruthy();
  });
});
// bla
