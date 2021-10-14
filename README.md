# Task Manager by Team 3D

Group Assignment for Generation Australia Junior Web Dev bootcamp. To build a feature-packed To-do List/Task Manager

## Live [Demo](https://tripnfelt.github.io/3DAssign/)

**[Link to our github repo](https://github.com/tripnfelt/3DAssign)**

## Features

- Local Document Object Model storage for data created by users to persist after session is closed. 

- Responsive design across devices using bootstrap to display in a visually pleasing way across devices

- Interactive buttons

## Code Example


```
  //update button
  if (event.target.classList.contains("update-button")) {
    //     // Get the correct parent Task
    const parentTask = event.target.parentElement.parentElement.parentElement;
    //     // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);
    //find the text areas parent tree
    const textArea =
      event.target.parentElement.parentElement.parentElement.childNodes[3]
        .childNodes[1];
    const textAreaValue = textArea.value;
    console.log(textAreaValue);
    //     // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);
    alert("Task description updated and saved");

    task.comment = textAreaValue;
    // //     // Render the tasks
    taskManager.save();
    taskManager.render();
  }
}
```

## Contributors

- [Dai](https://github.com/daivuong-github)
- [Deki](https://github.com/dekpey)
- [Daniel](https://github.com/tripnfelt)
