var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'choice',
      message: 'your choice',
      default: 0,
      choices: [
        {value: "R", name: 'red'},
        {value: "G", name: 'green'},
        {value: "B", name: 'blue'},
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