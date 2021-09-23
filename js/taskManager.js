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