let inp = document.querySelector("#inp");
let ul = document.querySelector("#ul");
let btn = document.querySelector("#btn");


btn.addEventListener ("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value ="";
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});