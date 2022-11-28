const express = require('express');
const fs = require('fs')
const skillRoute = require('./routes/skill')
const heroRoute = require('./routes/hero')

const port = 3000
const app = express()

app.use(skillRoute)
app.use(heroRoute)

app.get('/', async (req, res, next) => {
  // 爬虫系统页面
  fs.readFile(__dirname + '/page/index.html', 'utf-8', (err, data) => {
    if (err) {
      res.send(`home page error: ${err}`)
    } else {
      res.status(200).end(data)
    }
  })
})

app.get('*', function (req, res, next) {
  // 404 页面
  fs.readFile(__dirname + '/page/404.html', 'utf-8', (err, data) => {
    if (err) {
      res.send('404')
    } else {
      res.status(404).end(data)
    }
  })
})

app.listen(port, function () {
  console.log(`Your App is running at http://localhost:${port}`);
});