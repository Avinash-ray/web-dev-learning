// TDZ

// console.log(x)
// console.log(b)
// var x= 10;
// const b= 100;

// block scope

// var a= 100
// {
//     var a= 10;
//     let b= 20;
//     const c= 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);

let a= 100
{
    var b= 10;
    let a= 20;
    const c= 30;

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
