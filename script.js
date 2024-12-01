

let countOne = function (callback) {
    setTimeout(function () { count.textContent = '10' }, 1000)
    callback();
}
let countTwo = function (callback) {
    setTimeout(function () { count.textContent = '9' }, 2000)
    callback();
}
let countThree = function (callback) {
    setTimeout(function () { count.textContent = '8' }, 3000)
    callback();
}
let countFour = function (callback) {
    setTimeout(function () { count.textContent = '7' }, 4000)
    callback();
}
let countFive = function (callback) {
    setTimeout(function () { count.textContent = '6' }, 5000)
    callback();
}
let countSix = function (callback) {
    setTimeout(function () { count.textContent = '5' }, 6000)
    callback();
}
let countSeven = function (callback) {
    setTimeout(function () { count.textContent = '4' }, 7000)
    callback();
}
let countEight = function (callback) {
    setTimeout(function () { count.textContent = '3' }, 8000)
    callback();
}
let countNine = function (callback) {
    setTimeout(function () { count.textContent = '2' }, 9000)
    callback();
}
let countTen = function (callback) {
    setTimeout(function () { count.textContent = '1' }, 10000)
    callback();
}
let count = document.createElement('h2');
count.setAttribute('id', 'counter')
countOne(function () {
    countTwo(function () {
        countThree(function () {
            countFour(function () {
                countFive(function () {
                    countSix(function () {
                        countSeven(function () {
                            countEight(function () {
                                countNine(function () {
                                    countTen(function () {
                                        setTimeout(function () { count.textContent = "Happy Independence Day ! ! ! ! ! " }, 11000)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
document.body.appendChild(count);