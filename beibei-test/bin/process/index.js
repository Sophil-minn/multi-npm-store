const cp = require('child_process');
const path = require('path');

// cp.exec('ls  -al|grep node_modules', function(err, stdout, stderr){
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
// });

// cp.exec(path.resolve(__dirname, 'test.shell'), {
  
//   cwd: path.resolve('../../'),
//   // cwd: process.cwd(),
// }, function(err, stdout, stderr){
//   console.log('cwd')
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
//   console.log('cwd')
// });
// 
// cp.execFile('ls', ['-al'], function(err, stdout, stderr){
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
// });

// cp.execFile(path.resolve(__dirname, 'test.shell'), ['-al',  'cc'], function(err, stdout, stderr){
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
// });


// console.log(cp, 'cp');

// const child = cp.spawn(path.resolve(__dirname, 'test.shell'), ['-al',  'cc'], {
//   cwd: path.resolve('../../'),
// });

// child.stdout.on('data', function(chunk){
//   console.log('stdout', chunk.toString());
// });
// child.stderr.on('data', function(chunk){
//   console.log('stderr', chunk.toString());
// });

// spawn: 耗时任务（比如： npm install）, 需要不断打印日志
const child = cp.spawn('npm', ['install'], {
  cwd: path.resolve('/Users/yanghuimin/multi-npm-demo/beibei-test-lib'),
  stdio: 'inherit'
});

// exec/execFile：开销比较小的任务

// child.stdout.on('data', function(chunk){
//   console.log('stdout', chunk.toString());
// });
// child.stderr.on('data', function(chunk){
//   console.log('stderr', chunk.toString());
// });

// cp.exec('npm install', {
//   cwd: path.resolve('/Users/yanghuimin/multi-npm-demo/beibei-test-lib'),
//   // cwd: process.cwd(),
// }, function(err, stdout, stderr){
//   console.log('cwd')
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
//   console.log('cwd')
// });

// console.log(child.pid, process.pid);

// 

// const child = cp.fork(path.resolve(__dirname, 'child.js'));

// child.send(' Hello child process!', () => {
//   // child.disconnect();
// } );

// child.on('message', (msg) => {
//   console.log('主进程收到的信息为： ', msg);
// });


// const ret = cp.execSync('ls -al|grep bin');
// console.log(ret.toString());
// const ret2 = cp.execFileSync('ls', ['-al']);
// console.log(ret2.toString());
// const ret3 = cp.spawnSync('ls', ['-al']);
// console.log(ret3.toString());

// console.log('main pid:', process.pid);