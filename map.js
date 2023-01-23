// Реализация метода map 

Array.prototype.maps = function(n) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(n(this[i]))
    }
    return arr
}

const num = [1, 4, 6]
const result = num.maps(i => i * 3)
console.log(result)

// Реализация метода map с помощью рекурсии

const maps1 = (arr, callback, newArr = []) => {
    if (arr.length <= 0) {
        return newArr
    } else {
        const [item, ...isRest] = arr;
        const interimArray = [...newArr, callback(item)]
        return maps1(isRest, callback, interimArray)
    }
}

const num1 = [1, 4, 6];
const result1 = maps1(num1, x => x * 2)
console.log(result1)