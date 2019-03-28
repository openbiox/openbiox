/**
 * Created by Harry on 2018/2/8.
 */

import express from 'express'
import login from './login'
import userGetter from './getter'
import userSetter from './setter'

var router = express.Router()

router.post('/api/login', function (req, res, next) {
  if (req.body.username && req.body.password) {
    login.login(req, res)
  } else {
    res.json({})
  }
})

router.post('/api/logout', function (req, res, next) {
  if (req.headers.token && req.body.uuid && req.body.userId) {
    login.logout(req, res)
  } else {
    res.json({})
  }
})

router.post('/api/check/token', function (req, res, next) {
  if (req.headers.token) {
    login.checkToken(req, res, function () {
      res.json({
        ret_code: 0,
        ret_msg: 'Token is ok.'
      })
    })
  } else {
    res.json({})
  }
})

router.post('/api/get/user/list', function (req, res, next) {
  if (req.headers.token) {
    login.checkToken(req, res, function () {
      userGetter.getUserList(req, res)
    })
  } else {
    res.json({})
  }
})

router.post('/api/get/user', function (req, res, next) {
  if (req.headers.token) {
    login.checkToken(req, res, function () {
      userGetter.getUser(req, res)
    })
  } else {
    res.json({})
  }
})

router.post('/api/get/user/:userId', function (req, res, next) {
  if (req.headers.token) {
    var userId = req.params.userId
    login.checkToken(req, res, function () {
      userGetter.getUser(req, res, userId)
    })
  } else {
    res.json({})
  }
})

router.post('/api/get/usergroup', function (req, res, next) {
  if (req.headers.token) {
    login.checkToken(req, res, function () {
      userGetter.getUserGroup(req, res)
    })
  } else {
    res.json({})
  }
})

router.post('/api/get/usergroup/list', function (req, res, next) {
  if (req.headers.token) {
    login.checkToken(req, res, function () {
      userGetter.getUserListGroup(req, res)
    })
  } else {
    res.json({})
  }
})

router.post('/api/get/usergroup/:userId', function (req, res, next) {
  if (req.headers.token) {
    var userId = req.params.userId
    login.checkToken(req, res, function () {
      userGetter.getUserGroup(req, res, userId)
    })
  } else {
    res.json({})
  }
})

router.post('/api/set/user', function (req, res, next) {
  if (req.headers.token) {
    login.checkToken(req, res, function () {
      userSetter.setUser(req, res)
    })
  } else {
    res.json({})
  }
})

router.post('/api/add/user', function (req, res, next) {
  if (req.headers.token) {
    login.checkToken(req, res, function () {
      userSetter.addUser(req, res)
    })
  } else {
    res.json({})
  }
})

router.post('/api/del/user/:userId', function (req, res, next) {
  if (req.headers.token) {
    var userId = req.params.userId
    login.checkToken(req, res, function () {
      userSetter.delUser(req, res, userId)
    })
  } else {
    res.json({})
  }
})

export default router
