// Реализация метода map 

Array.prototype.maps = function(n) {
    let arr = []
    // закидываем в массив значение переданное в this[i] и проводим с ним операцию переданную в переменную n
    // console.log(n)
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
        // деструктуризируем массив arr item это 0 значение массива , а isRest это оставшиеся элементы в массиве 
        const [item, ...isRest] = arr;
        // записываем в массив содержиммое массива newArr и колбек функицю которой передали 0 значение массива 
        const interimArray = [...newArr, callback(item)]
        console.log(interimArray)
        // isRest остаток от массива, колбек функция, новый массив куда мы закидываем все элементы
        return maps1(isRest, callback, interimArray)
    }
}

const num1 = [1, 4, 6];
const result1 = maps1(num1, x => x * 2)
console.log(result1)

//Реализация map c помщью reduce
const arr = [2,4,6]
console.log(arr.reduce((acc, num) => {
    acc.push(num * 2)
    return acc
}, []))