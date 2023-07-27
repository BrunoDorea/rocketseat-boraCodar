const slder = document.getElementById('slider')
const before = document.querySelector('.before-image')
const dragger = document.getElementById('dragger')

slider.addEventListener('input', (e) => {
    before.style.width = e.target.value + '%'
    dragger.style.left = `calc(${e.target.value}%)`
})