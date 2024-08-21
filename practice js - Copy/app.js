// function asyncOperation() {
//     let firstPromise = 
//         new Promise((resolve, reject) => resolve("Hello"));
//     let secondPromise = 
//         new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" worlddddddddd");
//         }, 1000);
//     });
//     let combinedPromise = 
//         Promise.all([firstPromise, secondPromise]);
//     return combinedPromise;
// }

// async function display() {
//     let data = await asyncOperation();
//     console.log(data);
// }

// display();


//new code 

// async function getRandomJokes() {
//     let url = 'https://v2.jokeapi.dev/joke/Any?safe-mode'
//     let response = await fetch(url)
//     let jokeDataf = await response.json()
// }



// getRandomJokes().then((joke) => {
//     console.log("Joke fetched:", joke);
// })


let arr  = [1, 2, 3 ,4 ,5, 6, 7, 8, 9, 10]

for(let i = 0; i < arr.length; i++ ){


    if(i == 3) break;
//    if(arr[i] == 3){
//     break;
//    }

//    console.log(arr[i])
    
//    if(i < 3) break;

console.log(i);


}