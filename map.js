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