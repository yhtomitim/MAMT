
var table = document.getElementById("taskList")
var inputForm = document.getElementById("addTask")
var taskList = document.getElementById("taskList")

var apiURL ='https://crud-todo.herokuapp.com/'

// var dataFromServer =''

inputForm.addEventListener('submit',event =>{
    event.preventDefault()
    addTask()
})

function addTask(){
    var newTask = document.querySelector("#newTask")
    var newDate =document.querySelector("#newDueDate")
    var dataArr =[]
    var newObj ={
        id:5,
        taskName:newTask.value,
        dueDate:newDate.value,
        completed:false
    }

    fetch(apiURL)
    .then(response => response.json())
    .then((data) => {
     addNewTask(data.tasks)
    })


   
    
}

function getData(){
    fetch(apiURL)
    .then(response => response.json())
    .then(data => buildList(data.tasks))
}

function addNewTask(data){
    console.log(data)
}

function buildList(data){
    for(let i = 0; i < data.length; i++){

    var newListItem = document.createElement('tr')
    newListItem.innerHTML = `
                        <td class="dateDue">${data[i].dueDate}</td>
                        <td class="taskName">${data[i].taskName}</td>
                        <td><button class="done-button"}>Completed</button></td>
                        <td><button class="delete-button">Delete</button></td>
                        `
    taskList.appendChild(newListItem)
}
var deleteButton = document.querySelectorAll('.delete-button')
var doneButton = document.querySelectorAll('.done-button')
for(let j=0; j < deleteButton.length; j++){
    deleteButton[j].addEventListener('click', function(){
        clickDelete(event, data, j)})
        doneButton[j].addEventListener('click', function(){
            clickDone(event, data, j)})
        }
}


function clickDone(event, data){
    event.target.parentNode.parentNode.classList.add('done')
}

function clickDelete(event, data, index){
event.target.parentNode.parentNode.classList.add('delete')
}




//dateDueTag.innerText = ${task[i].id}

getData()