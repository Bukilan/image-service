const router = require('express').Router();

router.use('/image', require('./api/image.route'));

module.exports = router;
