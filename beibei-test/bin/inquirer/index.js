var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'expand',
      name: 'choice',
      message: 'your choice',
      default: 'red',
      choices: [
        {key: "R", value: 'red'},
        {key: "G", value: 'green'},
        {key: "B", value: 'blue'},
      ]
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