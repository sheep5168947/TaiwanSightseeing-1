let taiwan_svg = document.querySelector('svg#taiwan')
    taiwan_svg.setAttribute('width',window.innerWidth*0.75)
    taiwan_svg.setAttribute('height',window.innerHeight*0.75)

document.body.onresize = () => {
    taiwan_svg.setAttribute('width',window.innerWidth*0.75)
    taiwan_svg.setAttribute('height',window.innerHeight*0.75)
}

document.querySelector('#mobile-menu').onclick = () => {
    document.querySelector('#menu').toggleAttribute('hidden')
}

document.querySelectorAll('path').forEach(ele => {
    console.log(ele.id)
    ele.onclick = async () => {
        await fetch(`./images/viewpoints/${ele.id}/01.txt`)
            .then(response => response.text())
            .then(text => {
                document.querySelectorAll('.modal .text')[0].innerText = text
                document.querySelectorAll('.modal img')[0].src = `./images/viewpoints/${ele.id}/01.jpg`
            })
        await fetch(`./images/viewpoints/${ele.id}/02.txt`)
            .then(response => response.text())
            .then(text => {
                document.querySelectorAll('.modal .text')[1].innerText = text
                document.querySelectorAll('.modal img')[1].src = `./images/viewpoints/${ele.id}/02.jpg`
            })
        document.querySelector('.modal #close').onclick = () => {
            document.querySelector('.modal-back').hidden = true
        }
        document.querySelector('.modal-back').hidden = false
        document.querySelector('.modal').scrollTo(0, 0)
    }
})