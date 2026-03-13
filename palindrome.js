
/*let user="hello"
let result=""
for(let i=user.length-1;i>=0;i--){
    result+=result+user[i]

}
console.log(result);
if(user == result){
    console.log("the given string: ${user} is palindrome");
    
}
else{
    console.log("the given string: ${user} is not palindrome");
}*/

let str = `testleaf`;
let reversed = ``;
 
for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}
 
console.log(`reversed string is: ${reversed}`);
