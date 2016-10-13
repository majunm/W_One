var toastNum = 2
var pageData = {}
pageData.data = {}
for(var i = 1; i <= toastNum; ++i) {
  pageData.data['toast'+i+'Hidden'] = true;
  (function (index) {
    //toast1Change toast2Change
    pageData['toast'+index+'Change'] = function(e) {
      var obj = {}
      obj['toast'+index+'Hidden'] = true
      this.setData(obj)
    }
    //toast2Tap,toast1Tap 点击事件
    pageData['toast'+index+'Tap'] = function(e) {
      var obj = {}
      obj['toast'+index+'Hidden'] = false
      this.setData(obj)
    }
  })(i)
}
Page(pageData)