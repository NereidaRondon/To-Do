let bgNone=()=>{ 
    document.getElementById('bg').style.backgroundImage ="";
};

let bgLight=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/bluemountains.png)";
};

let bgMarble=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/marble.png)";
    document.getElementById('bg')
};

let bgRainbow=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/rainbow.webp')";
};

let bgAurora=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/aurora.webp')";
};
let bgShore=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/shore.webp')";
};
///////////////////////////////////////////////////////////////////////////////
var userInput = document.getElementById("new-task");

userInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});


let id = 0;
//task is appended when add button is clicked or enter is keyed
let task=()=>{
    let date = new Date();
    let listDiv = $('.list');

    let created = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    let dueDate = document.getElementById('end-date').value;
    let newTask=  document.getElementById('new-task').value;
    
    listDiv.append(
                `<div id="task-${id}" class="task-container">
                    <div class="created box">${created}</div>
                    <div class="due box">${dueDate}</div>
                    <div id="editTask-${id}" class="task box">${newTask}</div>
                    <div id="editBtn-${id}" class="edit box"></div>
                    <div id="deleteBtn-${id}" class="delete box"></div>                        
                </div>`
    );
    console.log(`Added a task with id: task-${id}`);

    //call on create Edit and Delete button functions

    console.log(id);

    let deleteAction = document.getElementById(`deleteBtn-${id}`);
    deleteAction.appendChild(deleteButton(id));
  
    let editAction = document.getElementById(`editBtn-${id}`);
    editAction.appendChild(editButton(id));

    //Clear input fields
    document.getElementById('new-task').value='';
    document.getElementById('end-date').value='';
    console.log(`Fields are cleared`);   
        
    id++;
};
 

function deleteButton(id){
    let btn=document.createElement('button');
    btn.className='btn btn-outline-dark';
    btn.id= `del-${id}`;
    btn.innerHTML = '<i id="icon3" class="fa-solid fa-trash-can"></i><i class="fa-regular fa-trash-can"></i>';
    
    btn.onclick = ()=>{
        console.log(`Deleting row with id: task-${id}`);
        let taskToDelete = document.getElementById(`task-${id}`);
        taskToDelete.parentNode.removeChild(taskToDelete);
    };
    return btn;   
};


function editButton(id){
    let edit=document.createElement('button');
    edit.className='btn btn-outline-dark';
    edit.id= id;
    edit.innerHTML = '<i id="icon5" class="fa-regular fa-pen-to-square"></i>';
   
    edit.onclick = ()=>{
        console.log(`Updating task with id: task-${id}`);

        //let editTaskText = document.getElementById(`editTask-${id}`).innerHTML;
        let editTaskText = $(`#editTask-${id}`).text();
        //taskToDelete.parentNode.removeChild(taskToDelete);
        console.log(editTaskText);
        $(`#editTask-${id}`).text('');

        let taskDiv = $(`#editTask-${id}`);
        taskDiv.append(`<input type="text" id="taskInput-${id}" class="myInput" value="${editTaskText}"></input><button class="btn btn-outline-dark"><i id="icon6" class="fa-solid fa-square-check"></i></button>`);
        
        //Get editted text from input box and insert it into div
        let newText = $(`#taskInput-${id}`).value;
        $(`#editTask-${id}`).text(newText);

        //add onclick that will take input data and insert it into div 
        //then delete the input box and button
        
        addEventListener
        btn.onclick = ()=>{
        console.log(`Deleting row with id: task-${id}`);
        let taskToDelete = document.getElementById(`task-${id}`);
        taskToDelete.parentNode.removeChild(taskToDelete);
    };

    };
    return edit;   
};