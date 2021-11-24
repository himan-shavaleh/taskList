// UI variables
const newTask = document.querySelector('#task');
const newTaskForm = document.querySelector('#new-task');
const taskImportance = document.querySelector('#importance');
const taskList = document.querySelector('.task-list');
const searchInput = document.querySelector('#search');
const clearBtn = document.querySelector('#clear');
newTaskForm.addEventListener('submit',function(e){
    e.preventDefault();
    let selectedImp = taskImportance.options[taskImportance.selectedIndex].text;
    let html = document.createElement('li');
    html.innerHTML +=`
    <li class="list-item">
    <span class = "text">${newTask.value}</span>
    <span>${selectedImp}</span>
    <a class="task-link"><i class="fas fa-trash"></i></a>
    </li>
    `;
    taskList.insertAdjacentElement('afterbegin',html);
   newTask.value ='';
   taskImportance.selectedIndex =0;
  
});
taskList.addEventListener('click',function(e){
    
    if(e.target.parentElement.classList.contains('task-link')){
        console.log(e.target.parentElement);
        e.target.parentElement.parentElement.remove();
    }
});
clearBtn.addEventListener('click',function(e){
e.preventDefault();
while(taskList.firstChild){
    taskList.firstChild.remove();
}
});
searchInput.addEventListener('keyup',function(){
    const listItems = document.querySelectorAll('.list-item');
    const textInput = searchInput.value.toUpperCase();
    listItems.forEach(function(li){
        const textElemnt = li.querySelector('.text');
        console.log(textElemnt.innerHTML)
        if(textElemnt.innerHTML.toUpperCase().indexOf(textInput)>-1){
            li.style.display = '';
        }else{
            li.style.display = 'none';
        }
    });
   
})