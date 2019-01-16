let submit = document.querySelector('#submit')
let name = document.querySelector('#name')
let talk = document.querySelector('#talk')
let board = document.querySelector('.board')
let ref = db.ref('/comment')

ref.on('value', ss => {
  let data = ss.val()
  let data_arr = new Array
  console.log(ss.val())
  board.innerHTML = ''
  for (let i in data) {
    data_arr.unshift(data[i])
  }
  for (let i in data_arr) {
    let tt = document.createElement('div')
    tt.className = 'talk'
    tt.innerHTML = `
      <div class="talk">
        <h2>${data_arr[i].name}</h2>
        <h6>${data_arr[i].time}</h6>
        <p>${data_arr[i].talk}</p>
      </div>
    `
    board.append(tt)
  }
})

submit.addEventListener('click', () => {
  if (name.value == '' || talk.value == '') {
    alert('請填寫完整喔！')
    return 1
  }
  db.ref('/comment').push({
    name: name.value,
    time: new Date().toLocaleString(),
    talk: talk.value
  })
})