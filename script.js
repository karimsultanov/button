let btn = document.querySelector(".btn")
let box = document.querySelector(".box")

btn.addEventListener('click', () => {
    btn.classList.toggle('btn-hide')
})
document.addEventListener('keyup', event => {
    if(event.code === 'Space'){
        box.classList.add("box-hide")
    }
})