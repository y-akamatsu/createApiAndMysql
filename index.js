const app = require('./server.js');
const chalk = require('chalk');
const PORT = 3000;

app.listen(PORT, () => console.log(
  chalk.yellow.bold('Server has started!')
  + chalk.cyan.bold(`localhost:${PORT}`)
));