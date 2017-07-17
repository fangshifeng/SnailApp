# SnailApp项目简述
### 一、项目简介
本项目为开源项目，项目中的功能模块均来自于上线APP，技术选型的优劣均经过实战的检验。本项目会以模块的形式迭代更新。
项目使用的开发语言：
使用ReactNative框架+Android原生+IOS原生（JS+JSX+Android+IOS）
### 二、项目结构
![屏幕快照 2017-07-17 下午2.39.17](media/14992194586112/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-07-17%20%E4%B8%8B%E5%8D%882.39.17.png)

#### 结构解析：
#### 1、components
该文件夹下存放Android和IOS平台公用的JS文件，例如页面、工具类等等
#### 2、api
该文件夹下存放SnailApp的API接口文件
#### 3、assets
该文件夹下存放双平台公用图片（开发时，按照功能模块再次分组）
#### 4、common
该文件夹下存放公共组件或者页面
#### 5、constants
该文件夹下存放常量文件（开发时，按照类型再次分组）
#### 6、dispatcher
该文件夹下存放SnailApp的dispatcher文件
#### 7、scene
该文件夹下存放页面文件（开发时，按照功能模块再次分组）
#### 8、utils
该文件夹下存放工具文件
#### 9、stores
该文件夹下存放store文件
#### 10、App.js
该文件为SnailAPP的入口文件（index.android.js与index.ios.js文件分别引入App.js文件）

### 三、技术框架选型
#### 1、路由框架
##### react-native-router-flux
（1）插件安装：

```
npm i react-native-router-flux --save
```

（2）homepage：https://github.com/aksonov/react-native-router-flux#readme
（3）功能：在一个中心位置统一定义场景转换；无需通过导航对象的情况下，在页面的任何位置均可进行场景的转换，同时还可传递任意的参数
#### 2、数据库框架
##### realm
（1）安装插件：

```
npm install --save realm
react-native link realm
```

（2）homepage：https://realm.io/docs/javascript/latest/
（3）功能：高效快速安全的创建App的model层
#### 3、工具库
##### underscore
（1）安装插件：

```
npm install underscore
```
（2）homepage：http://underscorejs.org/
（3）功能：函数编程助手，内含大量的工具方法





