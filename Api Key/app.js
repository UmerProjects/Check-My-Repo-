let url = "https://catfact.ninja/fact"

// fetch(url).then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//         console.log(data.fact);
//     })
// }).catch((err) => {
//     console.log(err);
// })


// async function getAnApi () {
//     let res = await  fetch(url)
//     console.log(res);

//     let data = await res.json();
//     console.log(data);
// }

// getAnApi()

let checkThePosition;

let para = document.getElementById("demo")
let btn = document.getElementById("btn")

// function changingApi () {
//     fetch('https://api.adviceslip.com/advice')
// .then(res => res.json())
// .then((data) => {
//   console.log(data);
//   const advice2 = data.slip.advice;
//   console.log(advice2);
//   para.innerText = advice2 
// })
// }


// changingApi()

// function startInterval () {
//     if(!checkThePosition){
//         checkThePosition = setInterval(changingApi, 1000)
//     }
  
// }

// function stopInterval () {
//     clearInterval(checkThePosition)
//     checkThePosition = null;
// }


// btn.addEventListener('click', () => {
//     if(checkThePosition){
//         stopInterval()
//     } else {
//         startInterval()
//     }
// })



// startInterval()


// setInterval(changingApi, 10000)


