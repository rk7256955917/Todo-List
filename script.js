let id = document.getElementById("todo-input");

let btn = document.getElementById("btn");

let clear = document.getElementById("clear-All");

let form = document.getElementById("form");

let search = document.getElementById("search");

let ul = document.querySelector("ul");


form.addEventListener("submit", function(dets){

    dets.preventDefault();

    let value = id.value;

    let li = document.createElement("li");

    li.innerHTML = `
        ${value}
        <button>Update</button>
        <button>Delete</button>
    `;

    ul.appendChild(li);

    id.value = "";

});


clear.addEventListener("click", function(){

    ul.innerHTML = "";

});


ul.addEventListener("click", function(dets){

    if(dets.target.innerText === "Delete"){

        dets.target.parentElement.remove();

    }

});