// Реализация метода reduce

Array.prototype.redus = function(elem) {
    let arr = 0;
    for (let i = 0; i < this.length; i++) {
        elem(arr = arr + this[i])
    } 
    return arr
}

const num = [1, 4, 6];
const result = num.redus((acc, item) => acc + item);
console.log(result)