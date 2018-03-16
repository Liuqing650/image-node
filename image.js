var fs = require("fs");
var images = require("images");
// 异步读取
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("异步读取: " + data.toString());
});


















// images.setLimit(40000, 8000)
// images(30000, 1000)                     //Load image from file 
//   //加载图像文件
//   // .size(4000)                          //Geometric scaling the image to 400 pixels width
//   //等比缩放图像到400像素宽
//   .draw(images("test.jpeg"), 10, 10)   //Drawn logo at coordinates (10,10)
//   .draw(images("code.png"), 10, 1000)   //Drawn logo at coordinates (10,10)
//   //在(10,10)处绘制Logo
//   .save("output.png", {               //Save the image to a file,whih quality 50
//     quality: 100                    //保存图片到文件,图片质量为50
//   });