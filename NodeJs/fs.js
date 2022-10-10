let fs= require("fs")
console.log(fs)

// create file if does not exists and add content in it 
fs.appendFileSync("fs.txt","hello im appended");

// read the file and also convert it in readable from from buffer mode
let data= fs.readFileSync("fs.txt","utf-8")
console.log(data);

// let data= fs.readFileSync("fs.txt")
// console.log(data+" ");