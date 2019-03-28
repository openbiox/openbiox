var searchFuc = function (error, response, body, res, url) {
  if (!error) {
    var dat = JSON.stringify(body)
    dat = JSON.parse(dat)
    var param = /oncotator/.test(url) ? dat.gene : dat.name
    if (param) {
      res.json({
        count: 1,
        entries: [dat]
      })
    } else {
      res.json({
        count: 0,
        entries: []
      })
    }
  }
}

var samplesFuc = function (error, response, body, res, url) {
  if (!error) {
    res.send(body)
  } else {
    res.json({})
  }
}

var jsonReqParams = function (url) {
  var params = {
    url: url,
    method: 'GET',
    json: true,
    headers: {
      'content-type': 'application/json'
    }
  }
  return params
}

var reqConfig = {
  'jsonReqParams': jsonReqParams,
  'searchFuc': searchFuc,
  'samplesFuc': samplesFuc
}

export default reqConfig
