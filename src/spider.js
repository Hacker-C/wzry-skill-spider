const charset = require('superagent-charset');
const superagent = require('superagent');
const request = charset(superagent)
const userAgents = require('./utils/userAgents')

function spider(uri) {
  let userAgent = userAgents[parseInt(Math.random() * userAgents.length)]
  return new Promise((resolve, reject) => {
    request
      .get(uri)
      .set({ 'User-Agent': userAgent })
      .timeout({ response: 5000, deadline: 60000 })
      .charset('gbk')
      .end((err, res) => {
        if (err) {
          reject(`网页抓取失败 - ${err}`)
        } else {
          resolve(res)
        }
      })
  })
}

module.exports = spider