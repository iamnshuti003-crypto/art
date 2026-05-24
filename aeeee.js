const modal = document.getElementById('loginModal');

function openModal(){
    modal.style.display='flex';
}

function closeModal(){
    modal.style.display='none';
}

window.onclick=function(e){
    if(e.target==modal){
        closeModal();
    }
}

const columns = document.querySelectorAll('.column');
let draggedTask = null;

function attachDragEvents(task){
     task.addEventListener('dragstart',()=>{
        draggedTask = task;

        setTimeout(()=>{
            task.style.display='none';
        },0);
    });

    task.addEventListener('dragend',()=>{

        setTimeout(()=>{
            task.style.display='block';
            draggedTask = null;
        },0);
    });
}

document.querySelectorAll('.task').forEach(task=>{
    attachDragEvents(task);
});

columns.forEach(column=>{

    column.addEventListener('dragover',(e)=>{
        e.preventDefault();
    });

    column.addEventListener('drop',()=>{
        column.appendChild(draggedTask);
           });
});

function addTask(){

    const input = document.getElementById('taskInput');

    if(input.value.trim()===''){
        alert('Please enter a task');
        return;
    }

    const task = document.createElement('div');

    task.className='task';
    task.draggable=true;
    task.innerText=input.value;

    attachDragEvents(task);

    document.getElementById('todo').appendChild(task);

    input.value='';
}