// Реализация метода reduce

Array.prototype.redus = function(elem) {
    let arr = 0;
    // цикл до длины массива this 
    for (let i = 0; i < this.length; i++) {
        // берем аккамулятор и прибовляем к нему переданный элемент this под индексом i
        elem(arr = arr + this[i])
    } 
    return arr
}

const num = [1, 4, 6];
const result = num.redus((acc, item) => acc + item);
console.log(result)

// Реализация reduce с помощью рекурсии

reduce = (fn, acc, [head, ...tail]) => {
    // если head undefined то возвращаем acc , иначе возвращаем reduce и все заного 
    if (head === undefined) {

      return acc;
    }
    // fn запускает переданную функцию, acc плюсуется с head (0 число в массиве ) и оставляет на потом остаток массива и по кругу
    return reduce(fn, fn(acc, head), tail);
  };

add = (x, y) => x + y;
console.log(reduce(add, 0, [1, 2, 3]))