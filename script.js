let toDos = [];


// Create a "close" button and append it to each list item
function addCloseBtn() {
    let myNodelist = document.getElementsByTagName("LI");
    for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("DIV");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    // Click on a close button to hide the current list item
    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.remove();
            initialState();
        }
    }
}


// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
let innertxt = document.querySelector('.newtxt');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    initialState();
}, false);
list.addEventListener('click', function(ev) {
    if (ev.target.className === 'newtxt') {
        ev.target.parentElement.classList.toggle('checked');
    }
    initialState();
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let divtxt = document.createElement("div");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    divtxt.classList.add("newtxt");
    divtxt.appendChild(t);
    li.appendChild(divtxt);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    
    let span = document.createElement("DIV");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    let toDoInfo = {
        "task": divtxt.innerText,
        "completed": li.classList.contains("checked")
    };

    toDos.push(toDoInfo);
    saveToDo();

  for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
    }
}

function saveToDo(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function loadToDO(){
    toDos = JSON.parse(localStorage.getItem("toDos"))
    for (let i = 0; i < toDos.length; i++) {
        let newElement = document.createElement("LI"); 
        let divtxt = document.createElement("DIV");
        divtxt.classList.add("newtxt");
        newElement.appendChild(divtxt);
        divtxt.innerHTML = toDos[i].task;
        if (toDos[i].completed) {
            newElement.classList.add('checked')
        }
        list.append(newElement)
    }
}

function initialState(){
    toDos = [];
    for (let i = 0; i < list.children.length; i++) {
    let toDoItem = list.children.item(i);

    let toDoInfo = {
        "task": toDoItem.querySelector(".newtxt")?.innerHTML,
        "completed": toDoItem.classList.contains("checked")
    };
    console.log(toDoItem.querySelector(".newtxt"));

    toDos.push(toDoInfo);
    saveToDo();
    }
}

if (!localStorage.getItem("toDos")) {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}else{
    loadToDO();
}
addCloseBtn();
