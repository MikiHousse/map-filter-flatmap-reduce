// Реализация метода filter

Array.prototype.fils = function(elem) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
      // если this с i выдает true то элемент поподает в массив arr
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

function fills(arr, fn, output) {
    // если ?
    output || (output = []);
    // если массив не пустой то возвращаем output 
    if (!arr.length) { 
      return output;
    }
    // берем 0 элемент массива и пушим его в output
    if (fn(arr[0])) {
      output.push(arr[0]);
    }
    // затем вырезаем начальный элемент массива и запускаем цикл заного
    return fills(arr.slice(1), fn, output);
  }
  
  console.log(fills([1,2,3,4,5,6,7,8,9], function(i) { return i < 6; }));


  // Реализация метода filter с помощью reduce
  var myArray = [0, 1, 3, 5, 9];
  function filters(array, num) {
    return array.reduce((arr,el) => {
      if (num < el) {
        arr.push(el)
      }
      return arr
    }, [])
  }

  console.log(filters(myArray, 3))