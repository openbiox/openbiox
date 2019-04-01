import diskspace from 'diskspace'
import si from 'systeminformation'
import os from 'os'
import cpuStat from 'cpu-stat'
import shell from 'shelljs'

function getBasicStat (callback) {
  si.getStaticData()
    .then(data => {
      for (let key in process.env) {
        data[key] = process.env[key]
      }
      data.node_pkg_systeminformation_version = data.version
      delete data.version
      let rscript = shell.which('Rscript')
      if (rscript) {
        let installedRpkgs = JSON.parse(shell.exec(rscript + ' -e "jsonlite::toJSON(installed.packages())"')['stdout'])
        for (let i = 0; i < installedRpkgs.length; i++) {
          data['R_PKGS_' + installedRpkgs[i][0]] = installedRpkgs[i]
        }
      }
      callback(data)
    })
}

function getCpuStat (callback) {
  cpuStat.usagePercent(function (err, percent, seconds) {
    if (!err) {
      callback(percent)
    }
  })
}

function getDiskStat (callback) {
  let disk = {}
  let diskIO = {}
  let result = {}
  if (os.platform() === 'windows') {
    diskspace.check('C', async function (err, data) {
      if (!err) {
        disk = data
        diskIO = await si.fsStats()
        result = { disk: disk, diskIO: diskIO }
        callback(result)
      }
    })
  } else {
    diskspace.check('/', async function (err, data) {
      if (!err) {
        disk = data
        diskIO = await si.fsStats()
        result = { disk: disk, diskIO: diskIO }
        callback(result)
      }
    })
  }
}

function getMemStat (callback) {
  si.mem()
    .then(result => {
      result.status = 'READY'
      callback(result)
    })
    .catch(error => callback(error))
}

function getNetStat (callback) {
  si.networkStats()
    .then(result => {
      result.status = 'READY'
      callback(result)
    })
    .catch(error => callback(error))
}

export default {
  getBasicStat: getBasicStat,
  getDiskStat: getDiskStat,
  getMemStat: getMemStat,
  getNetStat: getNetStat,
  getCpuStat: getCpuStat
}
