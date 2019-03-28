/**
 * Created by Harry on 2018/2/8.
 */

import express from 'express'

import fs from 'fs'
import path from 'path'
import bibtexParse from 'bibtex2json'
import request from 'request'
import config from '../config'
import reqConfig from '../reqConfig'
var router = express.Router()

var assetsDir = config.assetsDir
var distDir = config.distDir

