Page({
    data: {
    array : [ ]
  },

  onChange(e) {
    console.log(e);
  },

  itemTag(e) {
    console.log(`father`);
    dd.navigateTo({
      url: '../check/index'
    })

    dd.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {

      },
    });
  },

  onLoad(query) {
    // 页面加载
    // console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    var that = this;
    var arr = new Array();
    var i;
    for(i=0;i<10;i++){
      var txt = "index " + i;
      var temp = { title: "交通", color:"#9FCF68" ,time:"2019.09.19 12:00",address:"杭州市滨江区吉利大厦",
      state:"已签收",reason:"危险驾驶"}
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
