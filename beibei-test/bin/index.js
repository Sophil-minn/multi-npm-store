#!/usr/bin/env node

const lib = require('beibei-test-lib');

console.log(lib, 'lib');

// 注册一个命令 minn-test-init
const argv = require('process').argv;
console.log(argv, 'argv---');

const command = argv[2];

if (lib[command]) {
  lib[command]();
}

// console.log(lib, 'beibei-test-lib');

console.log('猫咪贝贝0931');
console.log('贝贝0931');