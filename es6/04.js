// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let oo = {
//     aa: 1,
//     bb: 2,
//     cc: 123
// }
// oo.__proto__ = obj
// let { aa, ...dd } = oo
// console.log(dd)

// let a = { a: 1 }
// let aClone = {...a };
// console.log(aClone)
// 等同于
// let aClone = Object.assign({}, a);

// var a = [1, 2, 3]
// var b = [4, 5, 6]
// console.log([...a, ...b])


// var obj = {
//     a: 1,
//     b: 2
// }
// var arr = Object.getOwnPropertyDescriptors(obj)
// var newobj = Object.defineProperties({}, arr)
// obj.a = 3
// console.log(newobj)

var arr = [1, , 2, , 3]
    // arr.forEach(function(i) {
    //     console.log(i)
    // })

// console.log(arr.map(function(i) {
//     console.log(22)
//     return i
// }))
// console.log(Array.from(arr))

// for (i of arr) {
//     console.log(i)
// }
// console.log(arr.find(function(i) {
//     return i == undefined
// }))


// var fn = function() {
//     console.log(this)
//     return 11
// }

// var aa = (i = 1, ii = fn()) => {
//     var i = 2
//         // console.log(this)
//     console.log(i, ii)
// }
// var obj = {}
// aa.apply(obj)

// var aa = ({ i = 1, ii = 2 }) => {
//     console.log(i, ii)
// }

// aa({ ii: undefined })

// var aa = (...a) => {
//     var arr = [...a]
//     arr.push(...a)
//         // arr.push(1, 3, 4, 5)
//     var arr2 = [...a, 1]
//     console.log(arr2)

// }

// aa("1234567")

// var aa = (a) => { return a + 1 }


// console.log(aa(1))

// function aa() {
//     this.a = 1;
//     this.fn = () => {
//         console.log(this.a)
//     }
// }

// var ob = new aa()
// ob.fn()

// var aa = function() {
//     return new Promise(function(resolve, reject) {

//         setTimeout(function() {
//             // resolve(1)

//             reject(1)
//         }, 1000)
//     })
// }

// aa().then((d) => {
//     console.log(d)
// }).catch((err) => {
//     console.log(err + "2")
// })

// var aa = new Promise((resolve, reject) => {

//     try {

//         throw new Error('test');
//     } catch (e) {
//         (function() {
//             reject(e);
//         })()

//     }
// })
// aa.then(function(d) {
//         console.log(d)
//     })
// promises.catch(function(error) {
//     console.log(error);
// });
// var promise = new Promise(function(resolve, reject) {
//     reject(new Error('test'));
// });
// promise.catch(function(error) {
//     console.log(error);
// });


var aa = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(1)
        }, 1000)
    })
}

var bb = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // reject(new Error("message"))
            resolve(2)
        }, 3000)
    })
}
aa().then(function() {

        return bb()
    }).then(function() {

    })
    // Promise.all([aa(), bb()]).then(function(data) {
    //     console.log(data)
    // })
    // Promise.race([aa(), bb()]).then(function(data) {
    //     console.log(data)
    // })

var fn = function() {
    return new Promise(function(resolve, reject) {
        resolve("ok")
    })
}
Promise.resolve(fn()).then(function(data) {
    console.log(data)
})