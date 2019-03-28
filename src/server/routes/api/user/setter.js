import config from '../../config'
import mysql from 'mysql'
import UUID from 'uuid'
import utils from './utils'

// userGroup convert the html value to database value
const userGroup = {
  'Admin': 1,
  'User': 2,
  'Visitor': 3
}
const updateVars = ['id', 'uuid', 'username', 'name', 'age', 'gender', 'email', 'location', 'department',
  'institution', 'wechat', 'phone', 'avatar', 'is_active', 'last_login_time', 'last_login_ip'
]
const addVars = ['uuid', 'username', 'password', 'name', 'age', 'gender', 'email', 'location', 'department',
  'institution', 'wechat', 'phone', 'avatar', 'is_active', 'join_date'
]

function setUserGroup (req, res, userData, callback) {
  if (userData) {
    var params = []
    for (var i = 0; i < userData.usergroup.length; i++) {
      userData.usergroup[i] = userGroup[userData.usergroup[i]]
      params.push([userData.id, userData.usergroup[i]])
    }
    var connection = mysql.createConnection(config.mysqlParams)
    connection.connect()
    var sql = ''
    if (params.length > 0) {
      params.forEach(function (item, index) {
        sql = 'INSERT IGNORE INTO `users_group`(`user_id`, `group`) VALUES (?, ?)'
        connection.query(sql, item, function (error, results, fields) {
          if (error) {
            console.log('[Query ERROR] - ', error.message)
            if (callback) {
              callback(error.message)
            } else {
              res.json({
                ret_code: 1,
                msg: error.message
              })
            }
          }
        })
      })
    }
    if (params.length === 0) {
      sql = 'DELETE FROM `users_group` WHERE `user_id`=(?)'
      params = [userData.id]
    } else {
      sql = 'DELETE FROM `users_group` WHERE `user_id`=(?) AND `group` NOT IN (?)'
      params = [userData.id, userData.usergroup]
    }
    connection.query(sql, params, function (error, results, fields) {
      if (error) {
        console.log('[Query ERROR] - ', error.message)
        if (callback) {
          callback(error.message)
        } else {
          res.json({
            ret_code: 1,
            msg: error.message
          })
        }
      } else {
        setUserPassword(req, res)
      }
    })
    connection.end()
  }
}

function updateUserPassword (req, res, userData, callback) {
  var connection = mysql.createConnection(config.mysqlParams)
  connection.connect()
  var sql = 'UPDATE `users` SET `password`=? WHERE `id`=?'
  var params = [utils.cryptoPassword(userData.newpassword), userData.id]
  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      if (callback) {
        callback(error.message)
      } else {
        res.json({
          ret_code: 1,
          msg: error.message
        })
      }
    } else {
      if (callback) {
        callback(error.message)
      } else {
        res.json({
          ret_code: 0
        })
      }
    }
  })
}

function setUserPassword (req, res, callback) {
  var userData = req.body.userData
  if (userData.oldpassword) {
    var connection = mysql.createConnection(config.mysqlParams)
    connection.connect()
    var sql = 'SELECT id,uuid FROM users WHERE username=? AND password=?'
    var params = [userData.username, utils.cryptoPassword(userData.oldpassword)]
    connection.query(sql, params, function (error, results, fields) {
      if (error) {
        console.log('[Query ERROR] - ', error.message)
        if (callback) {
          callback(error.message)
        } else {
          res.json({
            ret_code: 1,
            msg: error.message
          })
        }
      } else {
        if (results.length === 0) {
          if (callback) {
            callback(error.message)
          } else {
            res.json({
              ret_code: 1,
              msg: 'Old password is not correct.'
            })
          }
        } else {
          updateUserPassword(req, res, userData)
        }
      }
    })
  } else {
    if (callback) {
      callback()
    } else {
      res.json({
        ret_code: 0
      })
    }
  }
}

function checkUserName (req, res, userData, callback) {
  var sql = 'SELECT id FROM `users` WHERE username=?'
  var params = [userData.username]
  var connection = mysql.createConnection(config.mysqlParams)
  connection.connect()
  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      if (callback) {
        callback(error.message)
      } else {
        res.json({
          ret_code: 1,
          msg: error.message
        })
      }
    } else {
      if (results.length === 0 || results[0].id === userData.id) {
        callback()
      } else {
        res.json({
          ret_code: 1,
          msg: 'Username is already used.'
        })
      }
    }
  })
  connection.end()
}

function setUser (req, res, callback) {
  // usergroup key-value
  if (req.body.userData) {
    var userData = req.body.userData
    userData.is_active = Number(userData.is_active)
    var sql = 'UPDATE `users` SET '
    var params = []
    for (var i = 0; i < updateVars.length; i++) {
      if (i === updateVars.length - 1) {
        sql = sql + '`' + updateVars[i] + '`=?'
      } else {
        sql = sql + '`' + updateVars[i] + '`=?,'
      }
      params.push(userData[updateVars[i]])
    }
    sql = sql + ' WHERE id=?'
    params.push(userData.id)
    checkUserName(req, res, userData, function () {
      var connection = mysql.createConnection(config.mysqlParams)
      connection.connect()
      connection.query(sql, params, function (error, results, fields) {
        if (error) {
          console.log('[Query ERROR] - ', error.message)
          res.json({
            ret_code: 1,
            error: error.message
          })
        } else {
          setUserGroup(req, res, userData)
        }
      })
      connection.end()
    })
  }
}

function addUser (req, res) {
  // usergroup key-value
  if (req.body.userData) {
    var userData = req.body.userData
    if (!userData.is_active) {
      userData.is_active = false
    }
    userData.is_active = Number(userData.is_active)
    var sql = 'INSERT INTO `users`(' + addVars.join(',') + ') VALUES('
    var params = []
    for (var i = 0; i < addVars.length; i++) {
      if (i === addVars.length - 1) {
        sql = sql + '?'
      } else {
        sql = sql + '?,'
      }
      if (addVars[i] === 'uuid') {
        params.push(UUID.v1())
      } else if (addVars[i] === 'join_date') {
        params.push(new Date())
      } else if (addVars[i] === 'password') {
        params.push(utils.cryptoPassword(userData[addVars[i]]))
      } else if (userData[addVars[i]]) {
        params.push(userData[addVars[i]])
      } else {
        params.push(null)
      }
    }
    sql = sql + ')'
    checkUserName(req, res, userData, function () {
      var connection = mysql.createConnection(config.mysqlParams)
      connection.connect()
      connection.query(sql, params, function (error, results, fields) {
        if (error) {
          console.log('[Query ERROR] - ', error.message)
          res.json({
            ret_code: 1,
            error: error.message
          })
        } else {
          userData.id = results.insertId
          setUserGroup(req, res, userData)
        }
      })
      connection.end()
    })
  }
}

function delUser (req, res, userId, callback) {
  var sql = 'DELETE FROM `users` WHERE `id`=?'
  var params = userId
  var connection = mysql.createConnection(config.mysqlParams)
  connection.connect()
  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      if (callback) {
        callback(error.message)
      } else {
        res.json({
          ret_code: 1,
          msg: error.message
        })
      }
    } else {
      if (callback) {
        callback()
      } else {
        res.json({
          ret_code: 0
        })
      }
    }
  })
  connection.end()
}

export default {
  setUser: setUser,
  checkUserName: checkUserName,
  delUser: delUser,
  addUser: addUser
}
