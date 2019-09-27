Page({
  data: {
    b_text:'First',
    b_background: 'white',
    // circles: [{radius: 100,latitude:'30.279383',longitude:'120.131441'}]
    // circles: [{
    //   latitude: 30.279383,
    //   longitude: 120.131441,
    //   color: '#FF0000DD',
    //   fillColor: '#7cb5ec88',
    //   radius: 100,
    //   strokeWidth: 2
    // }]
    circles: []
  },
  
  tap1(){
    console.info("qq","qq");
    //
    // dd.device.geolocation.get({
    //   targetAccuracy : 200,
    //   coordinate : 1,
    //   withReGeocode : false,
    //   useCache:true,
    //   onSuccess : function(result) {
    //     console.info("",result);
    //   },
    //   onFail : function(err) {}
    // });


    // this.setData({b_text:'new' ,b_background : '#89dcf8'})
    dd.getAuthCode({
      success:(res)=>{
       dd.alert({content: res.authCode})
     },
      fail: (err)=>{
        dd.alert({content: JSON.stringify(err)})
     }
    })
  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    // var amapFile = require('./toamap-wx.js');//如：..­/..­/libs/amap-wx.js
    // var s = [{
    //   latitude: 30.279383,
    //   longitude: 120.131441,
    //   color: '#FF0000DD',
    //   fillColor: '#7cb5ec88',
    //   radius: 100,
    //   strokeWidth: 2
    // }];
    // this.setData({
    //   circles : [{
    //   latitude: 30.279383,
    //   longitude: 120.131441,
    //   color: '#FF0000DD',
    //   fillColor: '#7cb5ec88',
    //   radius: 100,
    //   strokeWidth: 2
    // }]
    // });

  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
