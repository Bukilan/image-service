const chalk = require('chalk');

const timeChalk = chalk.gray;
const infoChalk = chalk.blue.bold(' [INFO] ');
const warnChalk = chalk.yellow.bold(' [WARNING] ');
const errorChalk = chalk.red.bold(' [ERROR] ');

const UTCTime = () => `${new Date().toUTCString()}`;

const logFunc = (chalkFunc) => (...messages) => {
  console.log(
    timeChalk(`[${UTCTime()}]`),
    chalkFunc,
    ...messages,
  );
};

global.log = logFunc(infoChalk);

global.logError = logFunc(errorChalk);

global.logWarn = logFunc(warnChalk);
