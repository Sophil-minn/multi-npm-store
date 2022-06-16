var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'yourName',
      message: 'your name',
      default: '默认贝贝',
      validate: function(v) {
        return typeof v === 'string';
      },
      transformer: function(v) {
        return v + '(input your name)';
      },
      filter: function(v) {
        return 'filter' + v;
      }
    },
    {
      type: 'number',
      name: 'num',
      message: 'your number:'
    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers, 'answers')
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });