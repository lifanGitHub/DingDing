Page({
  data: {
    image_src : ""
  },
  show(){
    // this.setData({image_src:"http://img0.pconline.com.cn/pconline/1712/27/10593085_51250_thumb.jpg"});
    dd.switchTab({//lf 只有这个方法可以跳转带有tab的页面
      url: '../tab3/index/index'
    });

    dd.getAuthCode({
      scopes: 'auth_user',
      success: ({ authCode }) => {
        console.log(authCode);
      },
    });


  },



  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
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
