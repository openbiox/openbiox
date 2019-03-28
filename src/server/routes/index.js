/**
 * Created by Harry on 2018/2/8.
 */
import api from './api'

import userApi from './api/user'

function setroute (app) {
  app.use(function (req, res, next) {
    next()
  })
  app.use('/', userApi)
  app.use('/', api)
}
export default {
  setroute: setroute
}
