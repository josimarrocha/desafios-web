
const $li = document.querySelectorAll('li')
let count = 0
setInterval(() => {
  $li[count].style.order = 0
  count++
  //item.style.order = 4 - index
}, 4000)

console.log($li)