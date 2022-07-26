let bgBluePink=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')";
};

let bgRainbow=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('https://images.unsplash.com/photo-1582573732277-c5444fa37391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')";
};

let bgSmoke=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('https://images.unsplash.com/photo-1598760122223-45f0f18a1bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')";
    
};


let id = 0;


document.getElementById('add').addEventListener('click', ()=>{
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(-1);

    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML=`${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`;
    
    row.insertCell(2).innerHTML=document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML=document.getElementById('new-end-date').value;

    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value='';
    console.log(endTable);
});

let endTable =document.querySelector("table").rows.length;

// let endTable2= document.querySelector.table.tBodies[0].rows.length;

console.log(endTable);
// console.log(endTable2);


function createDeleteButton(id){
    let btn=document.createElement('button');

    btn.className='btn btn-primary';
    btn.id=id;
    btn.innerHTML = '-';
   
    btn.onclick = ()=>{
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };

    return btn;
     
};

console.log(endTable);