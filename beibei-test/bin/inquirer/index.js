var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'editor',
      name: 'choice',
      message: 'your choice',
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