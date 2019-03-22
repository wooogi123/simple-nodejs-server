const fs = require('fs');

const readdir = fs.readdir('./views/', (err, data) => {
  const TemplateData = "";
  const exportsData = [];
  for(i = 0; i < data.length; i++){
    const writeData = data[i];
    if (data[i] == 'index.html'){
      TemplateData += "const home = handlerClosure('"+writeData[i]+"');\n";
      exportsData += "home";
    }else{
      TemplateData += "const "+data[i].split(".")[0]+" = handlerClosure('"+writeData[i]+"');\n";
      exportsData += writeData[i].split(".")[0];
    }
  }
  TemplateData += "module.exports = { ";
  for(var i=0; i < exportsData.length; i++){
      TemplateData += exportsData[i]+", ";
  }
  TemplateData += " }";
  fs.writeFileSync('requestHandlers.js', 'requestHandlersTemplate.txt', (err) => {
    if(err) throw err;
  });
  fs.writeFileSync('requestHandlers.js', TemplateData, (err) => {
    if(err) throw err;
  });
});
