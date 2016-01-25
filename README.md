# Cordova FlashLamp Plugin
# 闪光灯控制插件


##安装插件



```sh
$ cordova plugin add https://github.com/duanc/cordova-plugin-flash-lamp.git
```


##使用方法：

```sh
  flashlamp.createPayment( 成功回掉, 失败回掉,打开or关闭);
```

#打开闪光灯
```sh
  flashlamp.createPayment( function(result){
        console.log('suc: '+result)  //"success"
      }, function(result){
        console.log('err: '+result)  //"fail"|"cancel"|"invalid"
      },true);
```
#关闭闪光灯
```sh
  flashlamp.createPayment( function(result){
        console.log('suc: '+result)  //"success"
      }, function(result){
        console.log('err: '+result)  //"fail"|"cancel"|"invalid"
      },false);
```
#### 如果本插件给您或您的公司带来帮助 请别忘记点击右上角的【Star】

## License

Apache License 2.0
