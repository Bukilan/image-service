const router = require('express').Router();
const stream = require('stream');
const multer = require('multer');
const fs = require('fs');
const crop = require('../../../controllers/image/crop');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  const resultFilePath = await crop.applyCrop({
    file: req.file.path,
    value: JSON.parse(req.body.value),
  });
  const r = fs.createReadStream(resultFilePath);
  const ps = new stream.PassThrough();
  stream.pipeline(
    r,
    ps,
    (err) => { // Ошибка если файла нету или что-то в принципе нехорошее
      logError({
        error: err,
        file: 'crop.route.js',
      });
      if (err) {
        return res.sendStatus(400);
      }
      return null;
    },
  );
  ps.pipe(res);
});

module.exports = router;
