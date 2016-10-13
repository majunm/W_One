const req = require('../../utils/util.js')

Page({
 data: {
  imgUrls: [],
  resultDescription:'',
  hidden:false
 },
 
 onLoad(){
     var that = this
  req.GetByParams()//看这里  看这里  看这里
  .then(
      d=>this.setData(
          { resultDescription:d.resultDescription,imgUrls:d,hidden:false},       
    // 2.5秒后隐藏,我找的接口太快,loading没效果就挂掉了,故来个延迟干掉它
     setTimeout(function () {
       that.setData({
         hidden: true
       })
     }, 2500),
      console.log('成功.......'))
     ).catch(
         e=>{this.setData(
                {imgUrls:[],hidden:true},
                console.log('失败.......'))
    })
 }
})
//  不能格式化真丑,这函数不习惯,简单就变得不易阅读了..................
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// {
//         "resultCode": "0",
//         "resultDescription": " 请求成功。 ",
//         "token": "40da8a282a16b66c44549b8e7e211329160fa9ab",
//         "tokenExpireIn": "2592000"
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++