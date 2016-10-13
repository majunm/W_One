//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  showVieComp:function(){
    wx.navigateTo({
      url: '../view/view'
    })
  },
  showScrollViewComp:function(){
    wx.navigateTo({
      url: '../scroll-view/scroll-view'
    })
  },
  showScrollViewCompH:function(){
    wx.navigateTo({
      url: '../scroll-vew-h/scroll-vew-h'
    })
  },
  showSwiperComp:function(){
    wx.navigateTo({
      url: '../swiper/swiper'
    })
  },
   showSwiperComp2:function(){
    wx.navigateTo({
      url: '../swiper-s/swiper-s'
    })
  },
  icon_july:function(){
    wx.navigateTo({
      url: '../icon/icon'
    })
  },
  text_july:function(){
    wx.navigateTo({
      url: '../text/text'
    })
  },
  //显示进度----------------------------------------------
  progress_july: function(){
    wx.navigateTo({
      url: '../progress/progress'
    })
  },
  //显示加载----------------------------------------------
  loading_july:function(){
    wx.navigateTo({
      url: '../loading/loading'
    })
  },
  //吐司.........................
  toast_july:function(){
    wx.navigateTo({
      url: '../toast/toast'
    })
  },
  //弹窗.........................
  modal_july:function(){
    wx.navigateTo({
      url: '../modal/modal'
    })
  },
  // 底部菜单
  act_sheet_july:function(){
    wx.navigateTo({
      url: '../action-sheet/action-sheet'
    })
  },
  // 页面链接
  use_navigator_july:function(){
    wx.navigateTo({
      url: '../use-navigator/use-navigator'
    })
  },
  // checkbox
  check_box_july:function(){
    wx.navigateTo({
      url: '../checkbox/checkbox'
    })
  },
  // 单选框
  radio_july:function(){
    wx.navigateTo({
      url: '../radio/radio'
    })
  },
  // 选择器
  picker_july:function(){
    wx.navigateTo({
      url: '../picker/picker'
    })
  },
    // 输入狂
  input_july:function(){
    wx.navigateTo({
      url: '../input/input'
    })
  },
  // 表单
  form_july:function(){
    wx.navigateTo({
      url: '../form/form'
    })
  },
  // 开关
  switch_july:function(){
    wx.navigateTo({
      url: '../switch/switch'
    })
  },
  //slider
   slider_july:function(){
    wx.navigateTo({
      url: '../slider/slider'
    })
  },
  //图片image
  image_july:function(){
    wx.navigateTo({
      url: '../image/image'
    })
  },
  //音频
  audio_july:function(){
    wx.navigateTo({
      url: '../audio/audio'
    })
  },
  //视频
  video_july:function(){
    wx.navigateTo({
      url: '../video/video'
    })
  },
  //listview----------------------------------
  listview_july:function(){
    wx.navigateTo({
      url: '../listview/listview'
    })
  },
  //network_july----------------------------------
  network_july:function(){
    wx.navigateTo({
      url: '../network/network'
    })
  },
  //==============refreshview
  refresh_july:function(){
    wx.navigateTo({
      url: '../refresh/refresh'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
