const express = require('express')
const heroList = require('../data/herolist.json')

// 根据英雄名称获取 ID
const heroRoute = express()

heroRoute.get('/hero', (req, res) => {
  try {
    const { cname } = req.query
    const hero = heroList.find(item => item.cname.includes(cname))
    res.send(hero.ename + '')
  } catch (e) {
    res.send(`get heroId error: ${e}`)
  }
})

module.exports = heroRoute
