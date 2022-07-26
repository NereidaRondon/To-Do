// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);

let bgGray=()=>{ 
    document.getElementById('bg').style.backgroundImage ="";
};

let bgLight=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/bluemountains.png)";
};

let bgMarble=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/pinkbluemarble.png)";
};

let bgRainbow=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('https://images.unsplash.com/photo-1582573732277-c5444fa37391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')";
};

let bgSmoke=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('https://images.unsplash.com/photo-1598760122223-45f0f18a1bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')";
    
};
let myTasks = [];

let id = 0;

let task=()=>{
    let date = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(-1);

    row.setAttribute('id', `item-${id}`);
    
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    
    row.insertCell(1).innerHTML=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
    row.insertCell(2).innerHTML=document.getElementById('new-start-date').value;
    
    row.insertCell(3).innerHTML=document.getElementById('new-end-date').value;

    let actions = row.insertCell(4);
    actions.appendChild(deleteButton(id++));
  
    console.log(`Added a row with id: item-${id}`);

    myTasks.push(table);
    document.getElementById('new-task').value='';
    // console.log(myTasks);
    
    // localStorage.setItem("Mytable", myTasks);
}
   
// if (typeof(Storage) !== "undefined") {
//     localStorage.getItem("Mytable", myTasks);

// } else {
//     document.getElementById("list").innerHTML = "Your browser does not support Web Storage";
// }

function deleteButton(id){
    let btn=document.createElement('button');

    btn.className='btn btn-outline-dark';
    btn.id=id;
    btn.innerHTML = '➖';
   
    btn.onclick = ()=>{
        console.log(`Deleting row with id: item-${id+1}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;   
};

// if (JSON.parse(localStorage.getItem("myTasks"))) {
//   myTasks = JSON.parse(localStorage.getItem("myTasks"))
//   showTasks(myTasks);
// }

