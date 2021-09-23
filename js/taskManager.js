//creating Task HTML

const createTaskHtml = (taskName, comment, names, dueDate, taskStatus)=>{
const html =`<div class="card">
<p>Task: ${taskName}</p>
<p>Description: ${comment}</p>
<p>Assigned To: ${names}</p>
<p>Due Date:${dueDate}</p>
<p>Status: ${taskStatus}</p>
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


this.tasks.push({ task });
}
} 