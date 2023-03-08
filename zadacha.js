// 1. Combine all tags, unique
// Решена
// const posts = [
//     {tags: ["php", "python"]},
//     {tags: ["js", "html", "css"]},
//     {tags: []},
//     {tags: ["css", 'scss', 'sass', 'less']},
//     {tags: ["react", 'redux', 'vue', 'angular']},
//     {tags: ["ts"]},
//   ]

// console.log(posts.flatMap((tag) => tag.tags))

// 2. Find post with MAX length of tags
// Решена
  const posts = [
    tags = ["php", "python"],
    tags = ["js", "html", "css"],
    tags = [],
    tags = ["css", 'scss', 'sass', 'less', 'xz'],
    tags = ["react", 'redux', 'vue', 'angular',],
    tags = ["ts"],
  ]

console.log(posts.reduce((acc, post) => acc.length > post.length ? acc : post, [...posts[0]]))

// 3. Find post without tags     
// Решена
// const posts = [
//     {tags: []},
//     {tags: ["php", "python"]},
//     {tags: []},
//     {tags: ["js", "html", "css"]},
//     {tags: []},
//     {tags: []},
//     {tags: ["css", 'scss', 'sass', 'less']},
//     {tags: ["react", 'redux', 'vue', 'angular']},
//     {tags: []},
//     {tags: ["ts"]},
//   ]

//   console.log(posts.filter(post => post.tags.length < 1 ? post.tags : false)) 


// 4. Find post with tags       
// Решена
//   const posts = [
//     {tags: []},
//     {tags: ["php", "python"]},
//     {tags: []},
//     {tags: ["js", "html", "css"]},
//     {tags: []},
//     {tags: []},
//     {tags: ["css", 'scss', 'sass', 'less']},
//     {tags: ["react", 'redux', 'vue', 'angular']},
//     {tags: []},
//     {tags: ["ts"]},
//   ]

//   console.log(posts.filter(post => post.tags.length > 0 ? post.tags : false))

// 5. Add a new tag to EACH post 
// Решена
// const posts = [
//     {tags: ["php", "python",]},
//     {tags: ["js", "html", "css",]},
//     {tags: []},
//     {tags: ["css", 'scss', 'sass', 'less',]},
//     {tags: ["react", 'redux', 'vue', 'angular',]},
//     {tags: ["ts",]},
//   ]

// console.log(posts.map(post => post.tags.length !== 0 ? post.tags + ',go' : 'go'))

// 6. Check if there is at least one post without tags

// const posts = [
//     {tags: []},
//     {tags: ["php", "python"]},
//     {tags: []},
//     {tags: ["js", "html", "css"]},
//     {tags: []},
//     {tags: []},
//     {tags: ["css", 'scss', 'sass', 'less']},
//     {tags: ["react", 'redux', 'vue', 'angular']},
//     {tags: []},
//     {tags: ["ts"]},
//   ]


// const posts = [
//     {tags: ["php", "python",]},
//     {tags: ["js", "html", "css",]},
//     {tags: ["css", 'scss', 'sass', 'less',]},
//     {tags: ["react", 'redux', 'vue', 'angular',]},
//     {tags: []},
//     {tags: ["ts",]},
//   ]

// // console.log(posts.filter(post => post.tags.length))
// console.log(posts.reduce((acc, post) => post.tags.length !== [] ? acc : true, false ))
// Возможно post надо привести к булевому значение а только после этого сравнивать его с acc


// ЗАДАЧА
// Реализовать функцию поиска общих элементов во всех входных сетах

const set1 = ["foo", "bar"]
const set2 = ['foo']
const set3 = ["bar", "foo"]
const set4 = ["spam", "foo", 'bar']

function intersections(array1, array2, array3, array4) {
    const arr = array4.filter(value => array1.includes(value) && array2.includes(value) && array3.includes(value))
    return arr
}

console.log(intersections(set1, set2, set3, set4))

// Изучить TypeScript и сделать задачу на Set


// ЗАДАЧА-4

// 1.Найти примеры унарных, бинарных и тернарных операций над строками. 

// Примеры Унарных операций
// Инкремент х++
// Декремент х--
// Модуль |-x| = x
// Отрицание -х
// Взятие квадратного корня Math.sqrt(x)
// Натуральные логарифмы log(x)

// Примеры Бинарных операций
// Сложение x + y 
// Вычитание x - y
// Умножение x * y
// Деление x / y
// Возведение в степень x ** y or x ^ y

// Тернарный оператор 
// Условный оператор x ? y : x 

// 2.Подумать над возможной задачей где пригодился бы reduce с одной из найденных бинарных операций

//Вычислить числитель
// const arr = [2,4,6]
// console.log(arr.reduce((acc, num) => acc + num))

//Среднее арефметическое 
// const arr = [2,4,6]
// console.log(arr.reduce((total, amount, index, array) => {
//     total += amount;
//     if (index === array.length - 1) {
//         return total/array.length
//     } else {
//         return total
//     }
// }))

//Удваивание числа 
// const arr = [2,4,6]
// console.log(arr.reduce((acc, num) => {
//     acc.push(num * 2)
//     return acc
// }, []))

//Так же возведение в степень каждого элемента массива, деление всех числе из массива


// Task 1.1
// Predict and explain the results of the comparisons:

// Здесь будет false потому что объект это сылочный тип данных 
    console.log(
        {} == {}
    )
// ??
// true потомучто stringify преобразовывает в объект в обычную строку
    console.log(
        JSON.stringify({}) === JSON.stringify({})
    )
//false потому что сначало stringify делает из объекта строку, а parse преобразовывает обратно в объект
    console.log(
        JSON.parse(JSON.stringify({})) == JSON.parse(JSON.stringify({}))
    )

// Task 1.2
// Predict and explain the results of the comparisons:

// Здесь будет true потому что они сылаются на один и тот же объект
    const obj = {}
    console.log(
      obj == obj
    )
// true потомучто stringify преобразовывает в объект в обычную строку
    console.log(
      JSON.stringify(obj) == JSON.stringify(obj)
    )
// false возможно из за того что parse создает новый объект не ссылаясь на переданный ему объект или преобразовывает строку в объект который уже не сылается на обший объект ??
    console.log(
      JSON.parse(JSON.stringify(obj)) == JSON.parse(JSON.stringify(obj))
    )

// Task 1.3
// Predict and explain the result of the comparison:
    
    const set = new Set()
    // ??
// Мы добавили в переменную set значение и оно сразу его возвращает, по этой причине мы получем true 
    console.log(
      set.add(1) == set
    )
// ??
// по скольку х не имеет значения тот возможно будет 1х, но возможно уровнение не решить
    // x + 1 = x (this is Algebra, not JS)