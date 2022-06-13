console.log('child process');


console.log('child pid: ', process.pid);

process.on('message', (msg) => {
  console.log('子进程收到的信息为： ', msg);
});

process.send(' Hello main process!');