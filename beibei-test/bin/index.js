#!/usr/bin/env node

const lib = require('beibei-test-lib');

// console.log(lib, 'lib');

// 注册一个命令 minn-test-init
const argv = require('process').argv;
// console.log(argv, 'argv---');

const command = argv[2];

const options = argv.slice(3);

let [option, param] = options;

option = option?.replace('--', '');

if (command) {
  if (lib[command]) {
    lib[command]({ option, param });
  } else {
    console.log('20220604无效的命令');
  }
} else {
  console.log('20220604请输入命令： ');
}

// 实现参数解析 --version 和 init --name

if (command.startsWith('--') || command.startsWith('-')) {
  const globalOption = command.replace(/--|-/g, '');
  // console.log(globalOption, 'globalOption');
  if (globalOption === "version" || globalOption === "V") {
    console.log(globalOption, "20220604版本号： 1.3.0");
  }
}

// console.log(lib, 'beibei-test-lib');

// console.log('猫咪贝贝0931');
// console.log('贝贝0931');