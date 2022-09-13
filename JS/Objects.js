let obj={}
console.log(obj)

let person= {
    name: "Avinash",
    age: 28,
    gender: "male"
}

// dot notation
console.log(person.gender);

// square bracket notation
console.log(person["age"]);

// sign up
console.log(`hey ${person.name} thank you for signing up`)

let captainAmerica= {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Breuce Banner"],
    age: 10,
    isAvenger: true,
    address: {                      //nesting of objects
        state: "Mahattan",
        City: "New York",
        Country: "USA"
    },
    SayHi: function(){
        console.log(`hello my name is ${this.firstName}`);
    }
}

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
captainAmerica.SayHi();

// for
for(let key in captainAmerica){
console.log(key)
console.log(captainAmerica[key])
}

