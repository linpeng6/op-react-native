# op-react-native
this is about react-native content

官方文档
https://www.react-native.cn/
## 1.环境搭建
参考官方文档

## 2.访问网络
使用fetch API
还可以使用axios等第三方库
目前项目中使用公司封装fetch
使用axios时发现在app中上传图片会导致图片体积变大,目前还未找到具体原因,暂时放弃使用

## 3.长列表
FlatList,SectionList
虚拟列表
FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。

## 4.布局
flexbox布局

## 5.原生组件与核心组件
Text,Image,View,Button等

## 6.导航器
react-native-navigation

## 7.自适应
pxTodp = (px) => {
    return px * ScreenWidth / uiWidth;   //ScreenWidth屏幕宽度 uiWidth ui宽度
}

## 8.常用第三方库
react-native-pdf
react-native-webview
react-native-gesture-handler
...

