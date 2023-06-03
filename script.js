let totalCount = 0;

const setBtn = document.querySelector('.calc-button.double');
const calcButton = document.querySelectorAll('.calc-button');
const screen = document.querySelector('.screen');

// function setTotal() {
//     setBtn.addEventListener('click', () => {
//         screen.innerHTML = totalCount;
//     })
// }

calcButton.forEach(item => {
    item.addEventListener('click', () => {
        screen.innerHTML += item.innerHTML;
    })
})

console.log(setBtn)

setBtn.addEventListener('click', () => {
    screen.innerHTML = totalCount;
})


