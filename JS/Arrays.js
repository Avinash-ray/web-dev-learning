let cars= ['BMW', "AUDI", "MG",1,2,3,true]
console.log(cars);

// accessing the element
console.log(cars[4]);
console.log(cars[0])

// replacig element
cars[4]= "mahindra"
console.log(cars);

// adding element 
cars[7]= 'honda'
console.log(cars)

// Methods in an array
// 1. pop method
cars.pop();
console.log(cars)

// 2.push method
cars.push("tata");
console.log(cars)

// 3.unshift method
cars.unshift("jlr")
console.log(cars)

// 4.shift method
cars.shift();
console.log(cars)

// length of array
console.log(cars.length);

// 2d array
let array2d= [
    [1,2,3,4],
    [4,5,6],
    [7,8,9]
]
console.log(array2d)  // printing of 2d array
let res= (array2d[1])  
console.log(res[2])    
console.log(array2d[1])
console.log(array2d[1][2])
console.log(array2d[1][3])
console.log(array2d.length);  // no. of rows
console.log(array2d[0].length);// no. of columns

array2d[1][1]= false;
console.table(array2d)