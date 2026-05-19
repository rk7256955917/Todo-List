// let id= document.getElementById("todo-input");
// let input= document.getElementById("input")
// let btn= document.getElementById("btn");
// let clear= document.getElementById("clear-All");
// let form = document.getElementById("from");
// let search = document.getElementById("search");

// form.addEventListener("input",function(dets){
//     dets.preventDefault();
//     let value= input.value;
//     console.log(value);
//     input.value="";
// });

let id = document.getElementById("todo-input");

let btn = document.getElementById("btn");

let clear = document.getElementById("clear-All");

let form = document.getElementById("form");

let search = document.getElementById("search");

let ul = document.querySelector("ul");


form.addEventListener("submit", function(dets){

    dets.preventDefault();

    let value = id.value;

    console.log(value);

    let li = document.createElement("li");

    li.textContent = value;

    ul.appendChild(li);

    id.value = "";

});
