// function hello(){
//     console.log("Hello");
// }


// function printName(){
//     console.log("Umer");
//     console.log("qazi");
// }

// function print1to5(){
//     for(let i = 0; i<5; i++){
//         console.log(i);
//     }
// }

// function isAfult(){
//     let age = 13;
//     if(age>=18){
//         console.log("Is Adult")
//     }
//     else{
//         console.log("NOt Adult")
//     };
// }

// isAfult();
// print1to5();
// printName();


// function printPoem (){
//     console.log("Twinkle twinkle little star")
//     console.log("how are wonder")
// }
// printPoem();

// function dice(){
//    let rand = Math.floor(Math.random()* 6)+ 1;
//    console.log(rand);

// }
// dice();
// dice();
// dice();
// dice();

// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`)
// }

// printInfo("Umer", 20);
// printInfo("qazi", 19);
// printInfo(14);
// function sum(a,b){
//     console.log(a+b);
// }

// sum(4, 2);
// sum(6,9)

// function calcAvg(a, b, c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// calcAvg(3,4,5);

// function printTable(n){
//     for(let i = n; i<=n*10; i+=n){
//         console.log(i)
//     }
// }
// printTable(6);
 
// function isAdult(age){
//     if(age >= 18){
//         return"adult";
//     } else {
//         return "not adult";
//     }
// }
// function getSum(n){
//     let sum = 0;
//     for(let i=1; i <=n; i++){
//         sum+=1;
//     }
//     return sum;
// }

// let str = ["hi", "hello", "bye", "no"];

// function concat(str){
//     let result= "";

//     for(let i=0; i<=str.length; i++){
//     result += str[i]
//     }   
//     return result;
// }

// function calsum(a, b){
//     let sum = a +b;              //function scope
//     console.log(sum);
// }
// calsum(1, 2);



// {
//     let a = 25;
// }
// console.log(a)


// let age = 25;

// if(age >=18){
//     let str = "adult";
//     console.log(str)

// }

// function outer() {
//     let x = 5;
//     let y = 6;
 
//     function innerFunc() {
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }
// let greet = "hello";

// function changeGreet(){
//     let greet = "hi";
//     console.log(greet);

//     function innergreet(){
//         console.log(greet);
//     }
//     innergreet();

// }
// console.log(greet);
// changeGreet();

// let name = "Umer";

// let sum = function(a, b){
//     return a + b;
// }
// let hello = function(){
//     console.log("hello");
// }
// function multipleGreet(func, count){
//     for(let i = 1; i <= count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("Hello");
// }

// multipleGreet(greet, 10);




// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     } else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even    
//     } else {
//         console.log("wrong request")
//     }
// }

// let request = "odd"

// const calculator = {
//     num: 55,

//     add: function(a, b){
//         return a + b;
//     },
//     sub: function(a, b){
//         return a - b;
//     },
//     mul: function(a, b){
//         return a * b;
//     }
// }


// Practice Questions/

// let arr = [1,2,3,4,5,6,7,8,9];

// let num = 5;

// function largeNum(arr, num){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i]> num){
//             console.log(arr[i]);
//         }
//     }

// }
// largeNum(arr,num)

// let str= "abcdabcdefffgh"
// function getUniqueString(str){
//     let ans= "";
//     for(let i = 0; i < str.length; i++){
//         let curentChat= str[i];
//         if(ans.indexOf(curentChat) == -1){
//             ans+=curentChat;
//         }
//     }
//     return ans;
// }

// getUniqueString(str);


// let country = ["Australia", "Germany", "United States ofAmerica"];
// function longestName(country) {
//     let ansIdx = 0;
//         for (let i = 0; i < country.length; i++) {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if (currLen > ansLen) {
//         ansIdx = i;
//     }
// }
//     return country[ansIdx];
// }
// longestName(country);


// const stud = {
//     name: "sharadha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);
//     }

// }

// function getAvg(){
//     console.log(this)
// }


























