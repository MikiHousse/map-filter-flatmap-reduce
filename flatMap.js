// Реализация метода flatmap

const array = [1, 1, [2, 2], [[3, [4], 3], 2]]


  Array.prototype.maps = function(n) {
      let arr = []
      for (let i = 0; i < this.length; i++) {
          arr.push(n(this[i]))
      }
      return arr
  }

  const flats = (value, mapper) => {
    return Array.isArray(value) ?
      [].concat(...value.maps(x => flats(x, mapper))) :
      mapper(value);
    }
    
  const res = (item) => item * 2;
  const flatMapArray = flats(array, res);
  console.log(flatMapArray)

  


