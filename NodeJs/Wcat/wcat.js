/*1). node wcat.js filepath => display content of a file
 2). node wcat.js filepath1 filepath2 filepath3 =>displays the content of all files in terminal in concatenated
form in given order 
3). node wcat.js -s filepath => change multiple line breaks into singular

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
if(istrue){
    for(let i=1; i< contentArr.length; i++){
        if(contentArr[i] =="" && contentArr[i-1] ==""){
            contentArr[i] = null;
        }
        else if(contentArr[i] =="" && contentArr[i-1] ==null){
            contentArr[i] = null;
        }
    }
}

let tempArr= [];
// push everytjing in tempArr except null
for(let i=0; i< contentArr.length;i++){
    if(contentArr[i] != null){
        tempArr.push(contentArr[i])
    }
}
console.log("data after removing extra lines\n",tempArr)