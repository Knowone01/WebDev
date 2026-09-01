// sync : instructions are executed in sequence
console.log("one");
console.log("two");
console.log("three");
setTimeout(() => {
    console.log("hello");
}, 2000); // time should be in milliseconds
console.log("four"); // this statement wont wait for setTimeout to finish

// callback : a function passed as an argument to another function
function sum(a, b) {
    console.log(a + b);
}
function callback(a, b, func) {
    func(a, b);
}
callback(5, 10, sum);

// Callbacks : 
function getData(data, callback) {
    setTimeout(() => {
        console.log(data);
        if (callback) {
            callback();
        }
    }, 2000);


}
getData(1, () => { // ()=> is used so that the the function does not get executed immediately, 
    // it will be executed after the getData function is called
    getData(2);
})