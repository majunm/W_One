function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const API_URL = 'https://open.wo.com.cn/openapi/authenticate/v1.0/openapi/authenticate1.0?appKey=7449a06496e3c193f49d21a5187420c91cca7126&appSecret=6a4430d140b663f5974d273aaf56a4c936b1c198'
 
function getApi(url,params){
 return new Promise((res,rej)=>{
  wx.request({
   //url:API_URL+'/'+url,
   url:API_URL,
   //data:Object.assign({},params),
   header:{'Content-Type': 'application/json'},
   success:res,
   fail:rej
  })
 })
}
 
module.exports = {

 formatTime: formatTime,
  GetByParams(){
  return getApi('','')
   .then(res => res.data)
 },
 GetById(url,id){
  return getApi(url, id)
   .then(res => res.data)
 }
}
//  GetByParams(url,page=1,pageSize=20,search = ''){
//   // Object.assign 合并对象操作
//   //then()方法是异步执行
//   //就是当.then()前的方法执行完后再执行then()内部的程序
//   const params = { start: (page - 1) * pageSize, pageSize: pageSize }
//   return getApi(url, search ? Object.assign(params, { q: search }) : params)
//    .then(res => res.data)
//  }
//==============================================================================
// {
//         "resultCode": "0",
//         "resultDescription": " 请求成功。 ",
//         "token": "40da8a282a16b66c44549b8e7e211329160fa9ab",
//         "tokenExpireIn": "2592000"
// }