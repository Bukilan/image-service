const router = require('express').Router();
const multer = require('multer');
const stream = require('stream');
const fs = require('fs');
const controller = require('../../../controllers/image/watermark');


const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  const resultFilePath = await controller.simpleWatermark(req.file.path);
  const r = fs.createReadStream(resultFilePath);
  const ps = new stream.PassThrough();
  stream.pipeline(
    r,
    ps,
    (err) => { // Ошибка если файла нету или что-то в принципе нехорошее
      logError({
        error: err,
        file: 'watermark.route.js',
      });
      if (err) {
        return res.sendStatus(400);
      }
      return null;
    },
  );
  ps.pipe(res);
});

router.post('/custom', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'watermark', maxCount: 1 }]), async (req, res) => {
  const resultFilePath = await controller.customWatermark({
    watermark: req.files.watermark[0].path,
    file: req.files.file[0].path,
    x: +req.body.x,
    y: +req.body.y,
    w: +req.body.w,
    h: +req.body.h,
  });
  const r = fs.createReadStream(resultFilePath);
  const ps = new stream.PassThrough();
  stream.pipeline(
    r,
    ps,
    (err) => { // Ошибка если файла нету или что-то в принципе нехорошее
      if (err) {
        return res.sendStatus(400);
      }
      return null;
    },
  );
  ps.pipe(res);
});

module.exports = router;
