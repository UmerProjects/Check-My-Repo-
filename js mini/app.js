let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let dbtn = document.createElement("button")
    dbtn.innerText = "delete";
    dbtn.classList.add("delete")

    item.appendChild(dbtn)
    ul.appendChild(item);
    inp.value = "";
})

// let delbtns = document.querySelectorAll(".delete")

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
       let listItem = event.target.parentElement;
       listItem.remove();
       console.log("deleted")
    }
})

// for(dbtn of delbtns){
//     dbtn.addEventListener("click", function(){
//         let per = this.parentElement;
//         console.log(per);
//         per.remove();

//     })
// }