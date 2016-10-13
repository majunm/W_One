Page({
    data:{
        hidden:true
    },
   loadingChange:function(){
       this.setData({
        hidden:true
       }  
    )
   },
//    显示loading
  showLoading: function () {
    this.setData({
      hidden: false
    })

    var that = this
    // 1.5秒后隐藏
    setTimeout(function () {
      that.setData({
        hidden: true
      })
    }, 1500)
  }
})