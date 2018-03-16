var fs = require("fs");
var images = require("images");
var ProgressBar = require('./progress-bar');
var pb = new ProgressBar('合并进度', 100);
var position = [];
var imageInfo = {};
var fileName = '图片.png';
var quality = 100;

// 执行函数
function setUp() {
  getPosition();
};

// 异步读取图片位置信息
function getPosition() {
  fs.readFile('./pic/position.json', function (err, data) {
    if (err) {
      return console.error(err);
    }
    position = bufferToJSON(data);
    // console.log("position: " + data.toString());
    getImageInfo();
  });
}

// 异步读取图片尺寸信息
function getImageInfo() {
  fs.readFile('./pic/imageInfo.json', function (err, data) {
    if (err) {
      return console.error(err);
    }
    imageInfo = bufferToJSON(data);
    if (imageInfo && position && imageInfo.width && position.length > 0) {
      console.log('数据接收完成,开始合并图片...');
      merageImage(position, imageInfo);
      console.log();
      console.log('合并完成, 文件名: %s', fileName);
    }
  });
}

// BufferToJSON
function bufferToJSON(data) {
  return JSON.parse(data.toString());
}

setUp();

function merageImage(posArr, info) {
  var scale = 1000;
  images.setLimit(info.width + scale, info.height + scale)
  var drawImage = images(info.width, info.height);
  for (var index = 0; index < posArr.length; index++) {
    const pos = posArr[index];
    pb.render({ completed: index, total: posArr.length - 1 });
    drawImage.draw(images(`./pic/pic${index}.png`), pos.x, pos.y);
  }
  drawImage.save(fileName, { 
    quality: quality
  });
}
