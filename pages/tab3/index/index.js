Page({
    data: {
    array : [ ]
  },

  itemTag(e) {
    console.log(e);
    // dd.showToast({
    //   content: `第${e.currentTarget.dataset.index}个Item`,
    //   success: (res) => {

    //   },
    // });
  },

  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    var that = this;
    var arr = new Array();
    var i;
    for(i=0;i<10;i++){
      var txt = "index " + i;
      var temp = { name: txt }
      arr.push(temp);
    }
    this.setData({
      array: arr
    })


    

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
