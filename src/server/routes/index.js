/**
 * Created by Harry on 2018/2/8.
 */
import api from './api'

function setroute (app) {
  app.use(function (req, res, next) {
    next()
  })
  app.use('/', api)
}
export default {
  setroute: setroute
}
