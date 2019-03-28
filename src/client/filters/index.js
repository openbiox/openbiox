import moment from 'moment'
export default {
  formatDate: function (date) {
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
  },
  formatDateDropDetail: function (date) {
    return moment(date).format('YYYY-MM-DD')
  },
  formatFileSize: function (size) {
    if (!size) {
      return
    }
    if (size > 1024 * 1024 * 1024 * 1024) {
      return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
    } else if (size > 1024 * 1024 * 1024) {
      return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
    } else if (size > 1024 * 1024) {
      return (size / 1024 / 1024).toFixed(2) + ' MB'
    } else if (size > 1024) {
      return (size / 1024).toFixed(2) + ' KB'
    }
    return size.toString() + ' B'
  },
  capitalize (str) {
    var a = str.toLowerCase().split(' ')
    var b = a.map(function (val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    return b.join(' ')
  }
}
