// Function Expression

// let sayhi= function abcd(){
//     console.log("im func expression")
// }
// // console.log("ine 4 \n"+ sayhi);
// sayhi();

function calculator(str,a,b){
    if(str== 'add'){
        return function add(){
            console.log(a+b);
        }
    }
}
let returnedfunc= calculator('add',5,6)
console.log("returned function is \n"+ returnedfunc)
returnedfunc();

// IIFEE function
IIFE= (function(a,b){
    return a+b;
})(20,30)
console.log(IIFE);