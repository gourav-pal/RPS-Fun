    const toDo=[{ 
        name:null,
        duedate:null
    }];

    toDo.pop();

    function renderToDo(){
        let ToDoListHtml='';
        for(let i=0;i<toDo.length;i++){
            const obj=toDo[i];
        const {name,duedate}=obj;
            const html=`<div>${name}</div>
            <div>
            ${duedate}
            </div>
            <button class="delete-button" onclick="
            toDo.splice(${i},1);
            renderToDo();
            ">  Delete</button
            </div>`
            ToDoListHtml+=html;
        }
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
    }