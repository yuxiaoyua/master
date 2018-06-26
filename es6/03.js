var str = "sdfg"

// console.log(str.includes("e"))
// console.log(str.startsWith("d", 1))
// console.log(str.endsWith("d", 2))
// console.log(str.repeat(1.5))
// console.log(str.repeat("s2"))
// console.log(str.padStart(6))
// console.log(str.repeat("s2"))

// var aa = "天气真好"
// var fn = function() {
//     return "天气还行啊"
// }
// var obj = {
//     name: "zhangsan"
// }
// console.log(`<div>${false?fn():aa}</div>`)
// console.log(`<div>\`${obj.name}\`</div>`)

// console.log(Number.isFinite(Math.PI.length))
// console.log(Number.isFinite(-Infinity))
// console.log(Number.parseInt('12.34s'))

// console.log(Number.MAX_SAFE_INTEGER)
var p = function(i) {
        console.log(i)
    }
    // p(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))


// p(Math.trunc(null))
// p(Math.trunc(true))
// p(Math.trunc(""))
// p(Math.trunc(NaN))
// p(Math.trunc(undefined))
// p(Math.trunc("123"))
// p(Number.isInteger(1.0))

// p(Math.sign("123"))

// var a = [1, 2, 3, 4]
// var b = [4, 5, 6, 7, 8]

// p(a.concat(b))

// var obj = {
//     0: 1,
//     1: 2,
//     length: 4
// }
// p(Array.from(obj))

// var aa = function() {
//     p(Array.from(arguments, function(i) {
//         return i + 1
//     }))
// }
// aa(1, 2, 3, 4)

// p(Array.of(1))
// var arr = [1, 2, 3, 4, 5]
// p(arr.copyWithin(2))

// var arr = [1, 2, 3, 4, 5]
// p(arr.find(function(i, index) {
//     return index == 3
// }))

var arr = [NaN, 1, 2, 3]

// p(arr.indexOf(NaN))
// p(arr.findIndex(function(i) {
//     return i == NaN
// }))
// console.log([NaN].findIndex(y => Object.is(NaN, y)))


// var obj = {
//     a() {
//         console.log(1)
//     }
// }
// obj.a()
// var aa = "haah"
// var a = {

// }
// var ab = Symbol("a")
// var obj = {

//     ['a+d']: 3,
//     [ab]() {
//         p("2345")
//     }
// }

// obj[ab]()


// // obj["1234"] = 2
// p(obj)

// var ab = Symbol("a")
// var origin = {
//     cc: 1
// }

// var obj = {
//     a: {
//         aa: 1
//     },
//     b: 2,
//     [ab]: 3
// }
// obj.__proto__ = origin
//     // Object.defineProperty(obj, "a", { enumerable: false })
// console.log(Object.getOwnPropertyDescriptor(obj, ab))
// var ob = {}
// var ob1 = { b: "hha" }
// var st = "sdfsf"
// p(Object.assign(ob, obj, ob1, st))
// obj.a.aa = 5
// p(ob)

// var obj = {
//     aa: 1,
//     bb: 2
// }

// p(Object.keys(obj))
// p(Object.values(obj))
// p(Object.entries(obj))
// Object.entries(obj).forEach(function(i) {
//     let [a, b] = i
//     console.log(a, b)
// });

// var aa = function() {

// }
// var oo = new aa()
// p(oo.__proto__.__proto__.__proto__)


// var obj = {
//     a: 1
// }

// var obj2 = {
//     b: 3
// }
// Object.setPrototypeOf(obj, obj2)
// p(obj.b)
// var gos = Object.create({})
// class Foo {
//     constructor() {

//         return this;
//     }
//     go() {
//         console.log(this)
//     }
// }

// var oo = new Foo()
// oo.go()

// class Square {
//     constructor(length) {
//         this.a = 1
//         this.fn = function() {

//         }
//     }

//     methodName() {

//     }
// }
// Object.assign(Square.prototype, {
//     meta() {

//     },
//     go() {

//     }
// })

// console.log(Object.keys(Square))

// console.log(Object.getOwnPropertyNames(Square.prototype))

// export default { a: 1 }


async function f() {
    try {
        await Promise.reject('出错了');
    } catch (e) {
        console.log(e + "内部")
    }
    return await Promise.resolve('hello world');
}
f().then(v => console.log(v))
    .catch(e => console.log(e + "外部"))