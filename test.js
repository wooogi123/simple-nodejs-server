const fs = require('fs');

const path = './views/';

for(var i = 0; i <= 3; i++){
  console.log(fs.readdirSync(path)[i]);
}
