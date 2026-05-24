/* LOGIN */

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

/* DRAG & DROP */

const columns = document.querySelectorAll('.column');

let draggedTask = null;

function attachDrag(task){

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
attachDrag(task);
});

columns.forEach(column=>{

column.addEventListener('dragover',(e)=>{
e.preventDefault();
});

column.addEventListener('drop',()=>{

column.appendChild(draggedTask);

checkTasks();

});

});

/* ADD TASK */

function addTask(){

const input = document.getElementById('taskInput');

if(input.value===''){
alert('Enter task');
return;
}

const task = document.createElement('div');

task.className='task';
task.draggable=true;
task.innerText=input.value;

attachDrag(task);

document.getElementById('todo').appendChild(task);

input.value='';

}

/* CONGRATULATIONS */

function checkTasks(){

const todo=document.querySelectorAll('#todo .task').length;

const progress=document.querySelectorAll('#progress .task').length;

if(todo===0 && progress===0){

const congrats=document.getElementById('congrats');

congrats.style.display='block';

setTimeout(()=>{
congrats.style.display='none';
},4000);

}

}