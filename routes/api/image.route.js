const router = require('express').Router();

router
  .use('/crop', require('./image/crop.route'))
  .use('/effect', require('./image/effect.route'))
  .use('/format', require('./image/format.route'))
  .use('/resize', require('./image/resize.route'))
  .use('/rotate', require('./image/rotate.route'))
  .use('/watermark', require('./image/watermark.route'));

module.exports = router;
