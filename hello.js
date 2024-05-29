
// Array
const numbers = [21,22,23,24,25,232,33334,12414,12311,423];

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        console.log(numbers[i]);
    }
}


// OBJECT
const user1 = {
    firstName : "harkirat",
    gender : "male"
}

// Array of Objects
const allUsers = [
    {
        firstName : "harkirat",
        gender : "male"
    },
    {
        firstName : "xyz",
        gender : "abc"
    },
    {
        firstName : "ucvs",
        gender : "sdfa"
    }
]

for(let i=0; i<allUsers.length; i++){
    console.log(allUsers[i]["firstName"])
}
