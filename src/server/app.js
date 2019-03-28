import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from './routes/config'

/**
 * 设置应用路由
 */
import routes from './routes/index'
var app = express()

// uncomment after placing your favicon in /public
app.use(favicon(path.join(config.assetsDir, 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(config.distDir))
app.use(cors({ preflightContinue: true }))

routes.setroute(app)

export default app
