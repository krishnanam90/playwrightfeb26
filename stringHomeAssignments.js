


let s="Hello World"
let result=s.split(" ")
console.log(result[result.length - 1]);
console.log("Size of the last word in:", result, "is:", result[result.length - 1].length)

let s2=" fly me to the moon "
let output=s2.trim().split(" ")
console.log(output[output.length-1].length)
console.log("Size of the last word in:", output, "is:", output[output.length - 1].length)


function isanagram(str1,str2){
    return str1.split('').sort().join('')=== str2.split('').sort().join('')
}
console.log(isanagram("listen","silent"))
console.log(isanagram("hello", "world"))  