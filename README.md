# 基于 node 的图片拼装

## 环境和安装

需要 `node` 环境

`yarn` 或者 `npm install`

## 使用

`npm start`

## 特别说明

图片格式暂时为 `pic01.png`, `pic02.png`, ... 
其中还包含两个 `json` 文件

- imageInfo.json
- position.json

`imageInfo` 记录着即将合成的图片最大宽度和高度
`position` 记录着各个图片移动的位置
