var article = document.querySelector('article')

db.ref('/fruit/').on('value',ss=>{
  var data = ss.val()
  article.innerHTML = ''
  for (let i in data) {
    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
      <img src="${data[i].image}" alt="">
			<h3>${data[i].title}</h3>
			<div>價格 ${data[i].price}</div>
			<div>產地 ${data[i].origin}</div>
			<div>檢驗報告 <a href="${data[i].report}">點此查看</a></div>
    `
    article.append(card)
  }
})