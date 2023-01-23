// Реализация метода filter

Array.prototype.fils = function(elem) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if(elem(this[i]) === true) {
            arr.push(this[i])
        }
    }

    return arr
}

const num = [1, 4, 6];
const result = num.fils(e => (e > 2))
console.log(result)

// Реализация метода filter с помощью рекурсии

// const fils1 = (arr, callback, newArr = []) => {
//     if (arr.length <= 0) {
//         return newArr
//     } else {
//         const [item, ...isRest] = arr;
//         const interimArray = [...newArr, callback(item)]
//         return fils1(isRest, callback, interimArray)
//     }
// }

// const num1 = [1, 4, 6];
// const result1 = fils1(num1, x => (x > 2))
// console.log(result1)
