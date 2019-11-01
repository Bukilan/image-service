const router = require('express').Router();
const stream = require('stream');
const multer = require('multer');
const fs = require('fs');
const rotate = require('../../../controllers/image/rotate');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), async (req, res) => {
  const resultFilePath = await rotate.applyRotate({
    file: req.file.path,
    value: req.body.value ,
  });
  const r = fs.createReadStream(resultFilePath);
  const ps = new stream.PassThrough();
  stream.pipeline(
    r,
    ps,
    (err) => { // Ошибка если файла нету или что-то в принципе нехорошее
      logError({
        error: err,
        file: 'resize.route.js',
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

