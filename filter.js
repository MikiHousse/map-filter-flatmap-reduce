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