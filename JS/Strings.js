var str= "hello pepcoders"
console.log(str)
// access character
console.log(str[3])
str[3]= 'z' //strings are immutable in java
console.log(str);
// length of string
console.log(str.length)

// string methods

// extraction methods
// 1.slice method
// slice(start,end)  end= end-1
var slicedstr= str.slice(2,7)
console.log(slicedstr)

var slicedstr= str.slice(2)    // from 2 to end
console.log(slicedstr)

var slicedstr= str.slice(2,-4) 
console.log(slicedstr)

// 2. substring method
var substr= str.substr(2,6)
console.log(substr)

// tolowercase and twoupper case method
str= 'YOLO';
console.log(str.toLowerCase())

str= 'fomo'
console.log(str.toUpperCase())

//3. concatenation method(+)
let str1= "believe in "
let str2= "yourself"
let concatenatedstr= str1+str2;
console.log(concatenatedstr)

// 4. concat method
let concatstr= str1.concat(str2," and me");
console.log(concatstr)

// 5. trim method
let trimstr= "        hello     "
console.log(trimstr.length)
console.log(trimstr.trim().length)



