let bgNone=()=>{ 
    document.getElementById('bg').style.backgroundImage ="";
};

let bgLight=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/bluemountains.png)";
};

let bgMarble=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/pinkbluemarble.png)";
    document.getElementById('bg')
};

let bgRainbow=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/rainbow.webp')";
};

let bgSmoke=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/smoke.webp')";
};

var userInput = document.getElementById("new-task");

userInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});


let id = 0;
//task is appended when add button is clicked
let task=()=>{
    let date = new Date();
    let listDiv = $('.list');

    let created = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    let dueDate = document.getElementById('end-date').value;
    let newTask=  document.getElementById('new-task').value;
    console.log(dueDate);
    listDiv.append(
                `<div id="task-${id}" class="task-container">
                    <div class="created box">${created}</div>
                    <div class="due box">${dueDate}</div>
                    <div class="task box">${newTask}</div>
                    <div class="edit box">📝</div>
                    <div id="deleteBtn-${id}"class="delete box"></div>                        
                </div>`
    );

    let deleteAction = document.getElementById(`deleteBtn-${id}`);
    deleteAction.appendChild(deleteButton(id++));

    console.log(`Added a task with id: task-${id}`);

    document.getElementById('new-task').value='';
    document.getElementById('end-date').value='';
    console.log(`Fields are cleared`);   
    
};
 

function deleteButton(id){
    let btn=document.createElement('button');
    btn.className='btn btn-outline-dark';
    btn.id=id;
    btn.innerHTML = '<i id="icon3" class="fa-solid fa-trash-can"></i>';
   
    btn.onclick = ()=>{
        console.log(`Deleting row with id: task-${id+1}`);
        let taskToDelete = document.getElementById(`task-${id}`);
        taskToDelete.parentNode.removeChild(taskToDelete);
    };
    return btn;   
};


function deleteButton(id){
    let btn=document.createElement('button');
    btn.className='btn btn-outline-dark';
    btn.id=id;
    btn.innerHTML = '<i id="icon3" class="fa-solid fa-trash-can"></i>';
   
    btn.onclick = ()=>{
        console.log(`Deleting row with id: task-${id+1}`);
        let taskToDelete = document.getElementById(`task-${id}`);
        taskToDelete.parentNode.removeChild(taskToDelete);
    };
    return btn;   
};