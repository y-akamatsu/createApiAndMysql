const app = require('./server.js');
const chalk = require('chalk');
const PORT = 3000;
const url = `http://localhost:${PORT}/api/todos`;

app.listen(PORT, () => {
  console.log(chalk.black.yellow(url));
});	