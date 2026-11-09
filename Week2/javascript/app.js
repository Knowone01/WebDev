// sync : instructions are executed in sequence
// console.log("one");
// console.log("two");
// console.log("three");
// setTimeout(() => {
//     console.log("hello");
// }, 2000); // time should be in milliseconds
// console.log("four"); // this statement wont wait for setTimeout to finish

// // callback : a function passed as an argument to another function
// function sum(a, b) {
//     console.log(a + b);
// }
// function callback(a, b, func) {
//     func(a, b);
// }
// // callback(5, 10, sum);

// // Callbacks : 
// function getData(data, callback) {
//     setTimeout(() => {
//         console.log(data);
//         if (callback) {
//             callback();
//         }
//     }, 2000);


// }
// getData(1, () => {
//     getData(2);
// })
/*
getData(1, getData(2)) is incorrect for callback chaining
because getData(2) executes immediately and its return
value is passed as the callback.

getData(1, () => getData(2)) is correct because
the arrow function is passed without executing its body.

Remember:
getData(2)       -> Calls the function immediately.
() => getData(2) -> Creates a function that calls it later.

The callback runs only when callback() is invoked.
*/

// Promises

// let func = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(data);
//             resolve("Resolved");
//         }, 5000)
//     })
// }

// let func = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Hello world");
//         resolve("Promise result");
//         // reject("Promise result");
//     })
// }
// const result = func();
// result.then((res) => {
//     console.log(res);
// })
// result.catch((err) => {
//     console.log(err);
// })

// Promise chain : 

// function func() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hello World");
//             resolve("Resolved");
//         }, 3000);
//     })
// }

// //  Both the methods yield the same output the second one is more consise and commonly used 

// M1 : 
// func().then((res) => {
//     console.log(res);
//     func().then((res) => {
//         console.log(res);
//     })
// })


// // M2 : 
// func().then((res) => {
//     console.log(res);
//     return func();
// }).then((res) => {
//     console.log(res);
// })


// Async and Await : 

function func(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve();
        }, 2000)
    })
}
// async function func1() {
//     await func(1);
//     await func(2);
//     await func(3);
// }
// func1();

// We wont have to explicitly call the function if we use IIFE, they get executed immediately 
// (()=>{})();

(async () => {
    await func(1);
    await func(2);
    await func(3);

})();
