function help(){
    console.log(`
    These are some myCLI commands used in various situations:

        1. node main.js tree <path>
        2. node main.js organize <path>
        3. node main.js help
    `)
}

// function abc(){
//     console.log("yoyoyoyoyoyoyo")
// }
module.exports={
    help:help,
    // we wil call abc function by yo name
    // yo:abc
}