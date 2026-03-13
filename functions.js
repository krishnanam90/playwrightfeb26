
//function declaration
function userprofile(name){
    console.log("Hello," +   name);
}
userprofile("Roger");

//Arrow function
const double = (n)=> n*n;

console.log(double(10));

//Anonymous function
setTimeout(function () {
    console.log("This message is delayed by 2 seconds")
}, 2000)
       

//console.log(greet());

// Function that takes a callback
function getUserData(callback) {
  
  setTimeout(function () {
    callback("Call Back Function");
  }, 3000);
}
 
function callback() {
    console.log('Call Back Function')
}
getUserData(callback)