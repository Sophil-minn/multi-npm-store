#!/usr/bin/env node

const lib = require('beibei-test-lib');

console.log(lib, 'lib');

// 注册一个命令 minn-test-init
const argv = require('process').argv;
console.log(argv, 'argv---');

const command = argv[2];

const options = argv.slice(3);

let [option, param] = options;

option = option?.replace('--', '');

if (command) {
  if (lib[command]) {
    lib[command]({ option, param });
  } else {
    console.log('无效的命令');
  }
} else {
  console.log('请输入命令： ');
}

// console.log(lib, 'beibei-test-lib');

// console.log('猫咪贝贝0931');
// console.log('贝贝0931');