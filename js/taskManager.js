//creating Task HTML

const createTaskHtml = (taskName, comment, names, dueDate, taskStatus, id) => {
  const html = `<div class="card" data-task-id="${id}">
<p>Task: ${taskName}</p>
<p>Description: <textarea id="desctextarea" rows="3" cols="20" id="text">${comment}</textarea></p>
<p>Assigned To: ${names}</p>
<p>Due Date: ${dueDate}</p>
<p>Status: ${taskStatus}</p>
<div><p>
  <button class="done-button btn-2 ${
    taskStatus === "Done" ? "invisible" : "visible"
  }">Done</button>
  <button class="delete-button btn-2" id="deleteButton">Delete</button>
  <button class="update-button btn-2" id="updateButton">Update</button>
</p>
</div>  
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
    //Add task method
    const task = {
      id: this.currentId++,
      taskName: taskName,
      comment: comment,
      names: names,
      dueDate: dueDate,
      taskStatus: taskStatus,
    };

    // let unAssignedName = document.getElementById(names.value).innerHTML;
    // console.log(unAssignedName);

    this.tasks.push(task);
  }
  //  Get task id

  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      let task;
      task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
        console.log("found task:" + foundTask);
      }
    }
    return foundTask;
  }

  render() {
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      const taskHtml = createTaskHtml(
        task.taskName,
        task.comment,
        task.names,
        formattedDate,
        task.taskStatus,
        task.id
      );

      tasksHtmlList.push(taskHtml);
    }
    const taskHtml = tasksHtmlList.join("\n");
    const taskList = document.querySelector("#cardContainer");
    taskList.innerHTML = taskHtml;
  }
  //Task 9 Local storage
  save() {
    // Create a JSON string of the tasks
    const tasksJson = JSON.stringify(this.tasks);

    // Store the JSON string in localStorage
    localStorage.setItem("tasks", tasksJson);

    // Convert the currentId to a string;
    const currentId = String(this.currentId);

    // Store the currentId in localStorage
    localStorage.setItem("currentId", currentId);
  }

  load() {
    // Check if any tasks are saved in localStorage
    if (localStorage.getItem("tasks")) {
      // Get the JSON string of tasks in localStorage
      const tasksJson = localStorage.getItem("tasks");

      // Convert it to an array and store it in our TaskManager
      this.tasks = JSON.parse(tasksJson);
    }

    // Check if the currentId is saved in localStorage
    if (localStorage.getItem("currentId")) {
      // Get the currentId string in localStorage
      const currentId = localStorage.getItem("currentId");

      // Convert the currentId to a number and store it in our TaskManager
      this.currentId = Number(currentId);
    }
  }

  //Delete button

  deleteTask(taskId) {
    // Create an empty array and store it in a new variable, newTasks
    const newTasks = [];

    // Loop over the tasks
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
      const task = this.tasks[i];

      // Check if the task id is not the task id passed in as a parameter
      if (task.id !== taskId) {
        // Push the task to the newTasks array
        newTasks.push(task);
      }
    }

    // Set this.tasks to newTasks
    this.tasks = newTasks;
  }
}
