# luckin_coffee
仿瑞幸咖啡官网 Vue开发
## 技术栈
Vue.js(脚手架、vue-router、axios) + Scss + CSS Sprite + Node.js + MySQL + H5的video标签<br>
Node.js > 8<br>
Vue 3.7.0
## 运行项目
    git clone https://github.com/Yoyeo98137/luckin_coffee.git
    cd luckin_coffee
    cd luck_server  // 切换后端文件夹下载后端依赖
    npm install
    cd ..
    cd luckin  // 切换前端文件夹下载前端依赖
    npm install
    // 先打开服务器还有mysql(本人用的xampp)
    // 需要先导入数据库，luck_server下的luck.sql文件
    // 服务器端口8787
    npm run serve
    访问 http://localhost:8080
## 功能实现
√ 首页视频自动播放、回到顶部<br>
√ 组件间跳转、组件切换动画实现<br>
√ 服务器cors解决跨域<br>
× 首页的一些动画效果如图片淡入淡出<br>
× 数据库搭建
## 制作目的
增加Vue的实践开发经验<br>
进一步熟悉组件化开发的流程和应用
## 项目时间
2019年1月开始
