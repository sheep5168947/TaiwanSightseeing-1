var image = document.querySelector('img#image')
var inputs = document.querySelectorAll('input')
var image_upload = document.querySelector('input#image')
var submit = document.querySelector('button#submit')
var ref = firebase.database().ref('/fruit/')

submit.addEventListener('click',function(){
  let empty = false
  inputs.forEach(ele=> {
    if (ele.value == '') empty = true
  })
  if (empty) {
    alert('請填寫全部欄位！')
    return 1
  }
  ref.push({
    image:document.querySelector('img#image').src,
    title:inputs[1].value,
    origin:inputs[2].value,
    price:inputs[3].value,
    contact:inputs[4].value
  }).then(()=>{
    window.location.href = './fruit.html'
  })
})

image_upload.addEventListener('change', function () {
  let file = this.files[0]
  if (!file.type.startsWith('image')) {
    alert('選擇的檔案並非圖片檔！')
    return false;
  }
  if (file.size / 1024 / 1024 > 10) {
      alert('請選擇小於10MB的檔案')
      return false
  }
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    image.src = this.result
  }
})