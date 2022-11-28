const handleSkills = require('../utils/handleSkills')
const spider = require('../spider')
const express = require('express')
const skillRoute = express()

const baseImgUrl = 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/'

skillRoute.get('/skill', async (req, res, next) => {
  try {
    const { heroId } = req.query
    const html = await spider(`https://pvp.qq.com/web201605/herodetail/${heroId}.shtml`)
    let list = handleSkills(html)
    list = list.map((item, idx) => {
      return { ...item, imgUrl: `${baseImgUrl}${heroId}/${heroId}${idx}0.png` }
    })
    res.send(list)
  } catch (err) {
    res.send(`get skill error: ${err}`)
  }
})

module.exports = skillRoute