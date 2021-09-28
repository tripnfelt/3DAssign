const taskManager = new TaskManager(0);

// test


const form = document.querySelector("#mainForm");

form.addEventListener("submit", (event) => {
  const validateName = document.querySelector("#taskName");
  const validateDescription = document.querySelector("#comment");
  const validateAssignedTo = document.querySelector("#names");
  const validateDueDate = document.querySelector("#dueDate");
  const validateStatus = document.querySelector("#taskStatus");
  let validationFail = 0;

  event.preventDefault();
//
// Call this to clear all the form fields after the submission
const clearFormFields = () => {
  validateName.value = "";
  validateDescription.value = "";
  validateAssignedTo.value = "";
  validateStatus.value = "In Progress";
  validateDueDate.value = "";
  validateName.classList.remove("is-valid");
  validateDescription.classList.remove("is-valid");
  validateAssignedTo.classList.remove("is-valid");
  validateStatus.classList.remove("is-valid");
  validateDueDate.classList.remove("is-valid");
};

  event.stopPropagation();

  console.log("Task Name :" + validateName.value.length);
  console.log("Task Description :" + validateDescription.value.length);
  console.log("Task Assigned To :" + validateAssignedTo.value.length);
  console.log("Task Due Date :" + validateDueDate.value);
  console.log("Task Status:" + validateStatus.value);

  // Form validation for Task Name Field min length 5
  if (validateName.value.length > 5) {
    validateName.classList.add("is-valid");
    validateName.classList.remove("is-invalid");
  } else {
    validateName.classList.add("is-invalid");
    validateName.classList.remove("is-valid");
    validationFail++;
  }
  console.log(validationFail)

  // Form validation for Task Description Field min length 5
  if (validateDescription.value.length > 5) {
    validateDescription.classList.add("is-valid");
    validateDescription.classList.remove("is-invalid");
  } else {
    validateDescription.classList.add("is-invalid");
    validateDescription.classList.remove("is-valid");
    validationFail++;
  }
  console.log(validationFail)
  // Form validation for Task Assigned Field min length 5
  if (validateAssignedTo.value) {
    validateAssignedTo.classList.add("is-valid");
    validateAssignedTo.classList.remove("is-invalid");
  } else {
    validateAssignedTo.classList.add("is-invalid");
    validateAssignedTo.classList.remove("is-valid");
    validationFail++;
  }  
  console.log(validationFail)
  // Form validation for Due Date Field not empty
  // try your own validation for a date in the future
  if (validateDueDate.value) {
    validateDueDate.classList.add("is-valid");
    validateDueDate.classList.remove("is-invalid");
    console.log("if block")
  } else {
    validateDueDate.classList.add("is-invalid");
    validateDueDate.classList.remove("is-valid");
    console.log("else block")
    validationFail++;
  }
  let whichischecked;
  function displayRadioValue() {
    var ele = document.getElementsByName('options');

      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        whichischecked = ele[i].value;
    }
    return whichischecked
  }
  let newStatus = displayRadioValue()
  console.log(newStatus)
  
// // If validation fails then function will not proceed further and
//   // will return. The value of validationFail will also needed to be
//   // reset to 0.
//   // ----------------------------------------------------------------------------------
   if (validationFail > 0) {
     validationFail = 0;
     return;
   } else {
    taskManager.addTask(validateName.value, validateDescription.value, validateAssignedTo.value, validateDueDate.value, newStatus);
    console.log(taskManager.tasks)

          clearFormFields ();
          taskManager.render();
    };

});

// let taskHtml= createTaskHtml();
// console.log (taskHtml);
// console.log ("here hello line 116 *");
// const taskList = document.querySelector("#task-list");
// // Add an 'onclick' event listener to the Tasks List
// taskList.addEventListener("click", (event) => {
//   // Check if a "Mark As Done" button was clicked
//   if (event.target.classList.contains("done-button")) {
//     // Get the correct parent Task, yours might be slightly different
//     // Use console.log(event.target.parentElement) to see
// console.log(event.target.parentElement);
//     const parentTask =
//       event.target.parentElement.parentElement.parentElement.parentElement;
//     // Get the taskId of the parent Task and turn it into a number.
//     const taskId = Number(parentTask.dataset.taskId);
//     // Get the task from the TaskManager using the taskId
//     const task = taskManager.getTaskById(taskId);
//     // Update the task status to 'DONE'
//     task.status = "Done";
//   console.log (task.status);
//     // Render the tasks
//     taskManager.render();
//   }
// });
  