var result = [
      {
        id: 'view',
        name: '视图容器1',
      }, {
        id: 'content',
        name: '基础内容1',
      }, {
        id: 'form',
        name: '表单组件1',
      }, {
        id: 'feedback',
        name: '操作反馈1',
      }, {
        id: 'nav',
        name: '导航1',
      }, {
        id: 'media',
        name: '媒体组件1',  
      }, {
        id: 'map',
        name: '地图1', 
      }, {
        id: 'canvas',
        name: '画布1',
      }
    ];  // 假数据..........................................
//=================================================================
Page({
   onShow: function( e ) {
    wx.getSystemInfo( {
      success: ( res ) => {
        this.setData( {
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },
   pullUpLoad: function( e ) {
    this.setData( {
      // 链接数组 a数组=1 b数组=2,3 |a.concat(b) = 1,2,3|
      list: this.data.list.concat(result),
    })
    console.log( "上拉拉加载更多...." + this.data.list.length)
    this.onLoad()
  },
  pullDownRefresh: function( e ) {
    console.log( "下拉刷新....")
    this.setData( {
      list: this.data.list.concat(result),
    })
    
  },
     data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
      }, {
        id: 'content',
        name: '基础内容',
      }, {
        id: 'form',
        name: '表单组件',
      }, {
        id: 'feedback',
        name: '操作反馈',
      }, {
        id: 'nav',
        name: '导航',
      }, {
        id: 'media',
        name: '媒体组件',  
      }, {
        id: 'map',
        name: '地图', 
      }, {
        id: 'canvas',
        name: '画布',
      }
    ]
  }
})