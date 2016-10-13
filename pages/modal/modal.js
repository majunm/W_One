var num = 2
var pageData = {}
pageData.data = {}
for(var i = 1; i <= num; ++i) {
  pageData.data['modal'+i+'Hidden'] = true;
  (function (index) {
    //modal1Change modal2Change
    pageData['modal'+index+'Change'] = function(e) {
      var obj = {}
      obj['modal'+index+'Hidden'] = true
      this.setData(obj)
    }
    //modal2Tap,modal1Tap 点击事件
    pageData['modal'+index+'Tap'] = function(e) {
      var obj = {}
      obj['modal'+index+'Hidden'] = false
      this.setData(obj)
    }
  })(i)
}
Page(pageData)