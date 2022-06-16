var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'choice',
      message: 'your choice',
      default: 0,
      choices: [
        {value: 0, name: 'Minnn'},
        {value: 1, name: 'hui'},
        {value: 2, name: 'yang'},
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