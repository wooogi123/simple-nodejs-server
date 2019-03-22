const fs = require('fs');

const openFile = fs.open('./requestHandlers.js', 'r', (err, fd) => {
  if(err) throw err;
  var str = new Buffer(3);
  fs.read(fd, str, 0, str.length, null, (err, bytesRead, buffer) => {
    if(err) throw err;
    console.log(err, bytesRead, buffer);
    fs.close(fd, () => {
      console.log('done');
    });
  });
});
