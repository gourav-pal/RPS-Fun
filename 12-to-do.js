const toDo=JSON.parse(localStorage.getItem('todoList')) || [{ 
    name:null,
    duedate:null
}];

renderToDo();



function renderToDo(){
    let ToDoListHtml='';

    toDo.forEach((obj,index) => {
        const {name,duedate}=obj;
        const html=`<div>${name}</div>
        <div>
        ${duedate}
        </div>
        <button class="delete-button" onclick="
        toDo.splice(${index},1);
        renderToDo();
        ">  Delete</button>
        `
        ToDoListHtml+=html;
    });
    document.querySelector('.disp-toDo').innerHTML=ToDoListHtml;
    
}


function Add(){
    const inputElement=document.querySelector('.js-name-input');
    const inputdate=document.querySelector('.js-date-input');
    const duedate=inputdate.value;
    const name=inputElement.value;
    toDo.push({
        name,
        duedate
    });
    console.log(toDo);
    renderToDo();
    inputElement.value='';
    renderToDo();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(toDo));
  }