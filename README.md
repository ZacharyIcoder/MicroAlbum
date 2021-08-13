# MicroAlbum
Vue3+TypeScript+ElementPlus+Nestjs+Nustjs+Mongodb 相册项目
flut

微相册
[github源码地址](https://github.com/ZacharyIcoder/MicroAlbum)

学习资料   [哔哩哔哩 全栈之巅](https://www.bilibili.com/video/BV18E41127N4)

#相关开发学习的网站
[nest官网学习](https://docs.nestjs.com/first-steps) 
[Element Plus官网](https://element-plus.gitee.io/#/zh-CN)

# mac开发 开发环境
npm -v
7.20.3

vue -V
@vue/cli 4.5.13

nest -v
8.0.2

yarn -v
1.22.10

#开发软件   
webstorm 或者 vscode

#开发栈
vue3 、Element Plus、

#启动项目
先启动mongodb数据库
我自己电脑启动如下
sudo mongod --dbpath "/Users/zikong/Documents/data/db" //本地启动mongodb


1.启动server admin   后台管理端服务器
cd server
nest start -w admin

2.启动server server  app和网站服务器
cd server
nest start -w server

3.启动 admin后台服务管理端
cd admin
yarn serve

4.启动网站
cd web
yarn dev


# 20210811 周三下午10:40
项目新建
nest new server //创建项目
使用yarn安装

cd server
nest g app admin //创建子应用  在server里面创建名为admin的子项目

nest start -w  admin //启动并实时监视 子项目admin  -w -watch

nest g lib db // nest g新建    lib库  db自定义文件名   新建名为db的库   这里创建的db是我们项目的数据库公共模块
? What prefix would you like to use for the library (default: @app)?    @libs //重命名为libs文件夹


yarn add nestjs-typegoose @typegoose/typegoose    //安装数据库相关包
yarn add mongoose @types/mongoose

sudo mongod --dbpath "/Users/zikong/Documents/data/db" //本地启动mongodb

lsof -i:3000 //查看端口号使用情况
kill -9   //结束端口号

nest g mo -p admin users //在admin子项目project中创建users模块
nest g co -p admin users //在admin子项目project中创建users控制器

yarn add nestjs-mongoose-crud //增删改查接口

yarn add @nestjs/swagger swagger-ui-express


#20210812周四下午10：04
跟server同级别目录用vue创建后台管理网站

[comment]: <> (➜  MicroAlbum git:&#40;main&#41; ✗ ls)

[comment]: <> (LICENSE   README.md server)

[comment]: <> (➜  MicroAlbum git:&#40;main&#41; ✗ pwd)

[comment]: <> (/Users/zikong/Desktop/github/MicroAlbum)

[comment]: <> (➜  MicroAlbum git:&#40;main&#41; ✗  vue create admin)

[comment]: <> (cd admin)

[comment]: <> (vue add typescript)

[comment]: <> ([添加element-plus]&#40;https://element-plus.gitee.io/#/zh-CN/component/installation&#41;)

[comment]: <> ([comment]: <> &#40;npm install element-plus --save&#41;)

[comment]: <> (vue add element-plus )

[comment]: <> (vue add router  //添加路由)

[comment]: <> (vue add typescript)

yarn create vite <project-name> --template vue  

cd <project-name>  </br>
yarn  

yarn dev 
 

