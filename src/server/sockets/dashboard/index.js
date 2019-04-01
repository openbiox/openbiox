import utils from './utils'

function getHardwareStat (socket) {
  utils.getDiskStat(function (result) {
    socket.emit('getDiskStat', result)
  })
  utils.getMemStat(function (result) {
    socket.emit('getMemStat', result)
  })
  utils.getNetStat(function (result) {
    socket.emit('getNetStat', result)
  })
  utils.getCpuStat(function (result) {
    socket.emit('getCpuStat', result)
  })
}

function getStaticStat (socket) {
  utils.getBasicStat(function (result) {
    socket.emit('getBasicStat', result)
  })
}

function onEvents (socket, io) {
  return [
    {
      'event': 'dashboard message',
      'handler': (data) => {
        if (data.query === 'overview') {
          getHardwareStat(socket)
          getStaticStat(socket)

          setInterval(() => {
            getHardwareStat(socket)
          }, 2000)
        }
      }
    }
  ]
}

export default {
  onEvents: onEvents
}
