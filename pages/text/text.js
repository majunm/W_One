var first = 'this is first line\nthis is second line'
var extraLine = [];
Page({
  data: {
    text: first
  },
  add: function(e) {
    extraLine.push('182882828282')
    this.setData({
      text: first + '\n' + extraLine.join('\n')
    })
  },
  remove: function(e) {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: first + '\n' + extraLine.join('\n')
      })
    }
  }
})