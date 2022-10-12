/*1). node wcat.js filepath => display content of a file
 2). node wcat.js filepath1 filepath2 filepath3 =>displays the content of all files in terminal in concatenated
form in given order 
3). node wcat.js -s filepath(s) => change multiple line breaks into singular
4). node wcat.js -n filepath(s) => give numbering to all lines.
5). node wcat.js -b filepath(s) => give numbering to only non empty lines
We can mix and match the options.

*/

let fs= require("fs")
let inputArr= process.argv.slice(2)
// console.log(input)

let filesArr=[]
let optionsArr=[]
// place files path in filesArr
for(let i=0; i< inputArr.length; i++){
    let firstChar= inputArr[i].charAt(0);
    // console.log(firstChar);
    if(firstChar == "-"){
        optionsArr.push(inputArr[i])
    }
    else{
    filesArr.push(inputArr[i])
    }
}
// console.log(filesArr)

// check if all the files are present
for(let i=0; i< filesArr.length; i++){
    let doesExist= fs.existsSync(filesArr[i])
    if(!doesExist){
        console.log("file does not exist");
        return;
    }
}

// content read and appending starts
let content= "";
for(let i=0; i< filesArr.length; i++){
    let fileContent= fs.readFileSync(filesArr[i])
    content += fileContent+"\r\n";
}
// console.log(content);

let contentArr= content.split("\r\n")
console.table(contentArr);

// check if -s is present or not
let istrue= optionsArr.includes("-s");
let tempArr= [];
if(istrue){
    for(let i=1; i< contentArr.length; i++){
        if(contentArr[i] =="" && contentArr[i-1] ==""){
            contentArr[i] = null;
        }
        else if(contentArr[i] =="" && contentArr[i-1] ==null){
            contentArr[i] = null;
        }
    }
    console.table(contentArr)

// var tempArr= [];
// push everything in tempArr except null
for(let i=0; i< contentArr.length;i++){
    if(contentArr[i] != null){
        tempArr.push(contentArr[i])
    }
}
console.log("data after removing extra lines\n",tempArr)
}
contentArr = tempArr;

let indexOFN= optionsArr.indexOf("-n")
let indexOFB= optionsArr.indexOf("-b")
//  if -n or -b is not found, return -1.

let finalOption= ""
// if -a and -b are present
if(indexOFN != -1 && indexOFB != -1){
    if(indexOFN < indexOFB){
        finalOption= "-n"
    }
    else{
        finalOption= '-b'
    }
}
// either -n or -b is present
if(indexOFN != -1){
    finalOption= "-n"
}
else if(indexOFB != "-b"){
    finalOption= "-b"
}

// calling of functions by evaluating of finalOption
if(finalOption == "-n"){
    contentmodifybyN()
}
else if(finalOption == "-b"){
    contentmodifybyB();
}

function contentmodifybyN(){
    for(let i=0; i< contentArr.length; i++){
        contentArr[i]= (i+1)+") "+contentArr[i]
    }
}

function contentmodifybyB(){
    let count= 1;
    for(let i=0; i< contentArr.length; i++){
        contentArr[i]= count+") "+contentArr[i]
        count ++
    }
}
console.log(contentArr)

