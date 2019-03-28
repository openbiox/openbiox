import UUID from 'uuid'
import config from '../../config'
import mysql from 'mysql'
import utils from './utils'

function insertUserToken (userId, uuid, res) {
  var accessToken = UUID.v1()
  var connection = mysql.createConnection(config.mysqlParams)
  connection.connect()
  var sql = 'INSERT INTO users_token(user_id,token,expired_date) VALUES(?,?,?)'
  var day = new Date()
  day.setDate(day.getDate() + 1)
  var params = [userId, accessToken, day]
  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      console.log('[INSERT ERROR] - ', error.message)
      return
    }
    res.json({
      ret_code: 0,
      ret_msg: 'Success',
      uuid: uuid,
      userId: userId,
      accessToken: accessToken
    })
  })
  connection.end()
}

function updateUserTokenAndExpiredDate (userId, uuid, res) {
  var accessToken = UUID.v1()
  var connection = mysql.createConnection(config.mysqlParams)
  connection.connect()
  var sql = 'UPDATE `users_token` SET `expired_date`=?, `token`=? WHERE user_id=?'
  var day = new Date()

  day.setDate(day.getDate() + 1)
  var params = [day, accessToken, userId]
  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      console.log('[UPDATE ERROR] - ', error.message)
      return
    }
    res.json({
      ret_code: 0,
      ret_msg: 'Success',
      uuid: uuid,
      userId: userId,
      accessToken: accessToken
    })
  })
  connection.end()
}

function updateUserToken (userId, uuid, res) {
  var connection = mysql.createConnection(config.mysqlParams)
  connection.connect()
  var sql = 'SELECT user_id,expired_date FROM users_token WHERE user_id = ?'
  connection.query(sql, [userId], function (error, results, fields) {
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      return
    }
    if (results.length === 0) {
      insertUserToken(userId, uuid, res)
    } else {
      updateUserTokenAndExpiredDate(userId, uuid, res)
    }
  })
  connection.end()
}

function updateLastLogin (userId, req) {
  var connection = mysql.createConnection(config.mysqlParams)
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  var day = new Date()
  var sql = 'UPDATE `users` SET `last_login_time`=?,`last_login_ip`=? WHERE id=?'
  var params = [day, ip, userId]
  connection.connect()
  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      console.log('[Query ERROR] - ', error.message)
    }
  })
  connection.end()
}

function login (req, res) {
  var connection = mysql.createConnection(config.mysqlParams)
  var sql = 'SELECT id,uuid FROM users WHERE username=? AND password=?'
  var params = [req.body.username, utils.cryptoPassword(req.body.password)]
  connection.connect()
  connection.query(sql, params, function (error, results, fields) {
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      return
    }
    if (results.length === 1) {
      updateLastLogin(results[0].id, req)
      updateUserToken(results[0].id, results[0].uuid, res)
    } else {
      res.json({
        ret_code: 1,
        ret_msg: 'Account or password error'
      })
    }
  })
  connection.end()
}

function logout (req, res) {

}

function checkToken (req, res, callback) {
  var connection = mysql.createConnection(config.mysqlParams)
  var sql = 'SELECT user_id,token,expired_date FROM users_token WHERE token=?'
  if (req.headers.token) {
    var params = [req.headers.token]
    connection.query(sql, params, function (error, results, fields) {
      connection.destroy()
      if (error) {
        console.log('[Query ERROR] - ', error.message)
        return
      }
      var day = new Date()
      if (results.length === 0 && res) {
        res.json({
          ret_code: 1,
          ret_msg: 'Invalid token.'
        })
      } else if (results[0].expired_date < day && res) {
        res.json({
          ret_code: 1,
          ret_msg: 'Token is expired.'
        })
      } else if (callback) {
        callback(results)
      }
    })
  } else if (callback) {
    callback()
  }
}

export default {
  'login': login,
  'checkToken': checkToken,
  'logout': logout
}
