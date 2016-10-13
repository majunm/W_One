Page({
  data:{
    actionSheetHidden: true,
    actionSheetItems: ['1', '2', '3', '4']
  },
//   actionSheetTap  打开 底部弹窗
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  //   item 点击事件
  bindItemTap:function(e){
    console.log('tap ' + e.currentTarget.dataset.name)
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  }
})