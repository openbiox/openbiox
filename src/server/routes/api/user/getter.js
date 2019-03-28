import config from '../../config'
import mysql from 'mysql'

function getUserList (req, res, callback) {
  var connection = mysql.createConnection(config.mysqlParams)
  var sql = 'SELECT `id`, `uuid`, `username`, `name`, `age`, `gender`, `email`, `location`, `department`, `institution`, `wechat`, `phone`, `avatar`, `join_date`, `is_active`, `last_login_time`,  `last_login_ip` FROM users'

  connection.connect()
  connection.query(sql, function (error, results, fields) {
    connection.destroy()
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      return
    }
    if (callback) {
      callback(results)
    } else {
      res.json(results)
    }
  })
}

function getUser (req, res, userId, callback) {
  var connection = mysql.createConnection(config.mysqlParams)
  if (userId) {
    var sql = 'SELECT `id`, `uuid`, `username`, `name`, `age`, `gender`, `email`, `location`, `department`, `institution`, `wechat`, `phone`, `avatar`, `join_date`, `is_active`, `last_login_time`,  `last_login_ip` FROM users WHERE `id`=?'
    var params = [userId]
  } else {
    var sql = 'SELECT `id`, `uuid`, `username`, `name`, `age`, `gender`, `email`, `location`, `department`, `institution`, `wechat`, `phone`, `avatar`, `join_date`, `is_active`, `last_login_time`,  `last_login_ip` FROM users WHERE `id` in (SELECT user_id FROM users_token WHERE token=?)'
    var params = [req.headers.token]
  }

  connection.connect()
  connection.query(sql, params, function (error, results, fields) {
    connection.destroy()
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      return
    }
    if (callback) {
      callback(results)
    } else {
      res.json(results)
    }
  })
}

function getUserGroup (req, res, userId, callback) {
  var connection = mysql.createConnection(config.mysqlParams)
  if (userId) {
    var sql = 'SELECT `group` FROM users_group WHERE `user_id` =?'
    var params = [userId]
  } else {
    var sql = 'SELECT `group` FROM users_group WHERE `user_id` in (SELECT user_id FROM users_token WHERE token=?)'
    var params = [req.headers.token]
  }

  connection.connect()
  connection.query(sql, params, function (error, results, fields) {
    connection.destroy()
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      return
    }
    var final = []
    for (var i = 0; i < results.length; i++) {
      final.push(results[i].group)
    }
    if (callback) {
      callback(final)
    } else {
      res.json(final)
    }
  })
}

function getUserListGroup (req, res, callback) {
  var connection = mysql.createConnection(config.mysqlParams)
  var sql = 'SELECT `user_id`,`group` FROM users_group'
  var params = [req.headers.token]

  connection.connect()
  connection.query(sql, params, function (error, results, fields) {
    connection.destroy()
    if (error) {
      console.log('[Query ERROR] - ', error.message)
      return
    }
    var final = {}
    for (var i = 0; i < results.length; i++) {
      if (!final[results[i].user_id]) {
        final[results[i].user_id] = []
      }
      final[results[i].user_id].push(results[i].group)
    }
    if (callback) {
      callback(final)
    } else {
      res.json(final)
    }
  })
}

export default {
  getUserList: getUserList,
  getUserListGroup: getUserListGroup,
  getUserGroup: getUserGroup,
  getUser: getUser
}
