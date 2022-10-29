const equal = document.querySelector('.equal')
const results = document.querySelector('.results')
const numbers = document.querySelectorAll('.number')
const signs = document.querySelectorAll('.sign')
const clear = document.querySelector('.clear')


let firstValue = ''
let isFirstValue = false
let secondValue = ''
let isSecondValue = false
let sign = ''
let resultValue = 0

results.innerHTML = 0 //default

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value')
        if (isFirstValue ===  false) {
            getFirstValue(atr)
        }
        if (isSecondValue === false) {
            getSecondValue(atr)
        }
    })
}


function getFirstValue (number) {
    firstValue = firstValue + number
    results.innerHTML = parseFloat(firstValue)
}

function getSecondValue (number) {
    if (firstValue != '' && sign != '') {
        secondValue = secondValue + number
        results.innerHTML = parseFloat(secondValue)    
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value')
            isFirstValue = true
        })
        
    }
}
getSign()

equal.addEventListener('click', () => {
    results.innerHTML = ''
    if (sign === '+') {
        resultValue = firstValue + secondValue
    } else if (sign === '-') {
        resultValue = firstValue - secondValue
    } else if (sign === '*') {
        resultValue = firstValue * secondValue
    } else if (sign === '/') {
        resultValue = firstValue / secondValue
    }
    results.innerHTML = resultValue
    firstValue = resultValue //ramane resultatul ca fiind prima valoare(asta in caz ca vrea sa aduc rezultatul cu altceva)
    secondValue= ''
})

clear.addEventListener('click', ()=> {
    results.innerHTML = 0
     firstValue = ''
     isFirstValue = false
     secondValue = ''
     isSecondValue = false
     sign = ''
     resultValue = 0
})