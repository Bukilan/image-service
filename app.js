require('dotenv').config(); // Грузим окружение из .env
require('./utils/log');
const express = require('express');

const app = express();

app.use(require('morgan')('combined')); // Логгер  запросов
app.use('/api', require('./routes/api.route'));

app.listen(process.env.PORT, () => {
  log(`Listening on ${process.env.PORT}`);
});

console.log('aaa');
