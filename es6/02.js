// var obj = {
//     a: 1,
//     b: 2
// }

// var { a:a } = obj
// console.log(aa)




// var { 0: a } = [1, 2] //{0:1,1:2}
// console.log(a)

// var { 0: a } = "abcd"
// console.log(a)

// var { Boolean: a } = true

// console.log(a)

// var obj = {
//     a: 1,
//     b: 2
// }
// var a;
// ({ a: a } = obj)
// console.log(a)

// var obj = {
//     aa: {
//         a: 1,
//         b: 3
//     },
//     bb: 11
// }

// let { aa: { a: c, d }, bb } = obj
// console.log(c)
// console.log(d)


// var obj = {
//     a: 1,
//     b: 2,
//     d: undefined
// }
// var fn = function() {
//     console.log(111)
//     return 1234
// }
// let { a = 1, d = fn() } = obj
// console.log(a, d)


// var arr = [1, 2, 3, 4, 5];

// let [a, b, ...c, d] = arr
// console.log(a, b)
// console.log(c)

var arr = [1, 2, 3, 4, 5];

var obj = {
    a: 1,
    b: 2,
    length: 2
}

// let [a, b, ...c] = "sertyujk"
// let [a, b, ...c] = obj

// console.log(a, b)
// console.log(c)


function aa() {
    console.log(arguments)
    let [a, b] = arguments
    console.log(a, b)
}
aa(1, 2)


var arr = [1, 2, 3, 4, null]

let [a = 22, b = 11, c, d, e = 22] = arr
console.log(a, b)
console.log(e)