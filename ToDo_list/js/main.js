import ToDoItem from "./toDoItem.js";
import ToDoList from "./toDoList.js";


const toDoList = new ToDoList();

// launch app
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed.");
    initApp();
  });
  

function initApp(){
    // adding newitem to list 
    const itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newEntryText = itemEntryForm.newItem.value.trim();
        console.log(newEntryText);
        if(newEntryText.trim() === ""){
            alert("Please enter a valid item");
            return;
        }else{
            const nextItemId = calNextItemId();
            const toDoItem = createNewItem(nextItemId, newEntryText);
            toDoList.addItem(toDoItem);



            // update persistent storage
            updatePersistentData(toDoList.getList()); //
            // this will clear and render the list  and set focus to new entry input
            makeaddsound();
            setTimeout(refreshThePage, 500); 
        }
    });

    // clearing the list 
    const clear = document.querySelector("#clearItems");
    clear.addEventListener("click", () => {
        console.log("clear");
        const list = toDoList.getList();
        // length of list is > 0
        if (list.length){
            const confirmation = confirm("Are you sure you want to clear the list?");
            if (confirmation){
                // clear the todilist
                toDoList.clearList();
                makeclearsoundslow();
                // the persistent storage
                updatePersistentData(toDoList.getList());
                // clear and render the list  and set focus to new entry input
                setTimeout(refreshThePage, 600); //
            }
          
        }


    });




    // load list from locall storage
    loadListFromLocalStorage();

    refreshThePage();
}

function loadListFromLocalStorage(){
    const storedList = localStorage.getItem("toDoList");
    const parsedlist = JSON.parse(storedList)

    console.log(parsedlist);

    parsedlist.forEach((object)=>{
            const newItem = createNewItem(object.id,object.item);
            // adding to list
            toDoList.addItem(newItem);

    })

}
  
function refreshThePage(){
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
}

function clearListDisplay(){
    const listContainer = document.querySelector(".listItems");
    console.log("listContainer:", listContainer);

    listContainer.innerHTML = "";
    
}
function renderList(){
    const list = toDoList.getList();
    list.forEach(li =>{
        buildListtItem(li);
    });

}

function buildListtItem(li){
    const div = document.createElement("div");
    div.className = "item";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = li.getId();
    check.tabIndex = 0;
    addClickListenerToCheck(check);

    const label = document.createElement("label");
    label.htmlFor = li.getId();
    label.textContent = li.getItem();

    div.appendChild(check);
    div.appendChild(label);

    const listitem = document.querySelector(".listItems");
    listitem.appendChild(div);
}

function addClickListenerToCheck(check){
    check.addEventListener("click", (event)=>{
        console.log(check.id)
        toDoList.removeItem(check.id);
        console.log(toDoList.getList());    
        // update persistent storage
        updatePersistentData(toDoList.getList());
        // wait for 1 second before updating the page to reflect the change in list
        setTimeout(makeclearsound, 300)
        setTimeout(refreshThePage, 1000)
    })
}

function updatePersistentData(list){
    // update local storage with new list
    localStorage.setItem("toDoList", JSON.stringify(list));
}

function clearItemEntryField(){
    const entry = document.querySelector("#newItem");
    

    entry.value = "";
}

function setFocusOnItemEntry(){
    const entry = document.querySelector("#newItem");
    entry.focus();

}

function calNextItemId(){
    let nextItemId = 1;
    const list = toDoList.getList();
    if(list.length>0){
        return nextItemId = list[list.length-1].getId() + 1;
    }else{
        return nextItemId;
    }
}

function createNewItem(nextid, itemtext){
    const newTodo = new ToDoItem();
    newTodo.setId(nextid);
    newTodo.setItem(itemtext);
    return newTodo;
}







function makeclearsound(){
    const audio = new Audio("./sounds/fast-whoosh.mp3");
    audio.play();
}
function makeclearsoundslow(){
    const audio = new Audio("./sounds/whoosh.mp3");
    audio.play();
}

function makeaddsound(){
    const audio = new Audio("./sounds/add.mp3");
    audio.play();
}