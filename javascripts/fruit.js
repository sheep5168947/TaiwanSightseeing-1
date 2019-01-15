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
			<div>價格 NT$ ${data[i].price} 起</div>
			<div>產地 ${data[i].origin}</div>
			<div>聯絡資訊 ${data[i].contact}</div>
    `
    article.append(card)
  }
})