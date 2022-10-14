
let helpFunc= require("./commands/help")

let inputArr= process.argv.slice(2)
let command= inputArr[0];

switch(command){
    case "tree":
         // call tree function
         break;

    case "organizer":
        // call organizer function
        break;

    case "help":
        helpFunc.help()
        break;

    default:
        console.log("command not recognized")
        break;

    }
