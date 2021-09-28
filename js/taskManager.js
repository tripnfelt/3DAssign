//creating Task HTML

const createTaskHtml = (taskName, comment, names, dueDate, taskStatus,id)=>{
const html =`<div class="card" data-task-id="${id}">
<p>Task: ${taskName}</p>
<p>Description: ${comment}</p>
<p>Assigned To: ${names}</p>
<p>Due Date:${dueDate}</p>
<p>Status: ${taskStatus}</p>
<div><p>
  <button class="btn btn-outline-success done-button">Done</button>
</p>
</div>  

<label for="taskP">Task Progress:</label>
<progress id="taskP" value="100" max="100">100%</progress>
</div>`;

return html;
};


//TaskManager Class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(taskName, comment, names, dueDate, taskStatus) {

//add task method
const task = {
  id: this.currentId++,
  taskName: taskName,
  comment: comment,
  names: names,
  dueDate: dueDate,
  taskStatus: taskStatus,
};
console.log("hello");
console.log(task);

this.tasks.push( task );
}
//  get task id

getTaskById(taskId) {

 let foundTask; 
 for (let i=0;i< this.tasks.length; i++) {
    let task
    task = this.tasks[i];
    console.log(task.id)
    if (task.id === taskId) {
      foundTask = task;
      console.log("found task:" + foundTask)
    }
 }
    return foundTask
}



render () {
  let tasksHtmlList = [];
  for (let i = 0; i < this.tasks.length; i++) {
    const task = this.tasks [i];
    const date = new Date (task.dueDate);
    const formattedDate = date.getDate () + "/" +(date.getMonth() + 1) + "/" + date.getFullYear();
    const taskHtml = createTaskHtml (
      // task.id,
      task.taskName,
      task.comment,
      task.names, 
     // task.names = names.value.innerHTML,
      formattedDate,
      task.taskStatus,
      task.id
   );
   console.log("hello");
   console.log(taskHtml);
   tasksHtmlList.push (taskHtml);
  }
   const taskHtml = tasksHtmlList.join ("\n");
   const taskList = document.querySelector ("#cardContainer");
   taskList.innerHTML = taskHtml;
}
}

