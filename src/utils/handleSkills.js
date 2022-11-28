const cheerio = require('cheerio');

let handleSkills = (res) => {
  let hotNews = [];
  
  /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
     以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
   */
  let $ = cheerio.load(res.text);

  // 找到目标数据所在的页面元素，获取数据
  $('.skill-desc').each((idx, ele) => {
    let news = {
      desc: $(ele).text()
    }
    hotNews.push(news)
  })

  const keys = ['title', 'cd', 'cost']
  $('.skill-name').each((idx1, p) => {
    p.childNodes.forEach((item, idx2) => {
       hotNews[idx1][keys[idx2]] = $(item).text()
    })
  })
  return hotNews
};

module.exports = handleSkills