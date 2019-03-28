import crypto from 'crypto'

function cryptoPassword (password) {
  let md5 = crypto.createHash('md5')
  return md5.update(password).digest('hex')
}

export default {
  cryptoPassword: cryptoPassword
}
