import path from 'path'
var mysqlParams = {
  host: 'localhost',
  user: '',
  password: '',
  database: '',
  port: 3306
}
var upload = {
  uploadDir: (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.minio/userdata'
}

var config = {
  'mysqlParams': mysqlParams,
  upload: upload,
  assetsDir: path.join(__dirname, '../../client/assets'),
  distDir: path.join(__dirname, '../../../dist')
}

export default config
