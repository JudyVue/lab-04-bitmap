'use strict';

const fs = require('fs');
const errorHandler = require(`${__dirname}/error-handler.js`);

module.exports = function colorExperiment(buffer, bitMapHeader) {
  var colorArrayStart = 54;
  var colorArrayEnd = bitMapHeader.offset;
  var colorArray = [];
  for (var i=colorArrayStart; i < colorArrayEnd; i++) {
    colorArray.push(buffer.readUInt8(i));
  }
  var modifiedColorArray = buffer.slice(54,colorArrayEnd);
  for (var j=2; j<modifiedColorArray.length; j++) {
    modifiedColorArray[j] = 255;
    j++;
    modifiedColorArray[j] = 0;
    j++;
    modifiedColorArray[j] = 0;
    j++;
    modifiedColorArray[j] = 0;
  }
  fs.writeFile(`${__dirname}/assets/outputs/testing.bmp`, buffer, (err) => {
    if(err) throw errorHandler(err);
  });
};
