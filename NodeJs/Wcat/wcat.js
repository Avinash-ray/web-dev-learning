/*1). node wcat.js filepath => display content of a file
 2). node wcat.js filepath1 filepath2 filepath3 =>displays the content of all files in terminal in concatenated
form in given order 

*/

let fs= require("fs")
let inputArr= process.argv.slice(2)
// console.log(input)

let filesArr=[]
// place files path in filesArr
for(let i=0; i< inputArr.length; i++){
    filesArr.push(inputArr[i])
}
console.log(filesArr)

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
    content += fileContent+"\n";
}
console.log(content);