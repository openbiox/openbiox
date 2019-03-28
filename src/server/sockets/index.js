import dashboardSockets from './dashboard'
export default {
  listenSocket: function (socket, io) {
    const dashboardSocketsOnEvents = dashboardSockets.onEvents(socket, io)
    let onEvents = []
    for (let i = 0; i < dashboardSocketsOnEvents.length; i++) {
      onEvents.push(dashboardSocketsOnEvents[i])
    }

    for (let i = 0; i < onEvents.length; i++) {
      socket.on(onEvents[i].event, onEvents[i].handler)
    }
  }
}
