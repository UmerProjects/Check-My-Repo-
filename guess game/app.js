// const student = {
//     name: "sharadha",
//     age: 23,
//     marks: 94.4

// }; 


// const item = {
//     price: 100.99,
//     discount:50,
//     colors = ["red", "pink"]
// }


// const post= {
//     username: "@Umer",
//     content: "THis is my firs post",
//     liker: 150,
//     repost: 5,
//     tags: ["apna college", "delta"]
// }


// const obj ={
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };


// const student ={
//     name: "Umer",
//     age: 20,
//     marks: 94.4,
//     city: "lahore"

// }

// const classInfo = {
//     umer: {
//         grade: "A+",
//         city: "lahore"
//     },
//     mohsin: {
//         grade: "A",
//         city: "jhelum"
//     },
//     hamza: {
//         grade: "B",
//         city: "Karachi"
//     }
// }

// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "delhi"
//     },
//     {
//         name: "Umer",
//         grade: "A",
//         city: "Lahore"
//     },
//     {
//         name: "hamza",
//         grade: "B",
//         city: "jhelum"
//     }
// ]

const max = prompt("Enter the max number you think")

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number")

while (true) {
    if(guess == "quit"){
        console.log("user Quit")
        break;
    }
    if (guess == random){
        console.log("Congrats this was the number" + random)
        break;
    }
    else if(guess < random){
        guess = prompt("Your guess is so small")
    }
    else if (guess > random) {
        guess = prompt("Your guess is too large")
    }
}












