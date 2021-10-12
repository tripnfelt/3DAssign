// Initialize a new TaskManager with currentID set to 0;
const taskManager = new TaskManager(0);

// Load the tasks from localStorage
taskManager.load();
// Render the loaded tasks to the page
taskManager.render();

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

  //log if there's a validation fail to console
  console.log(validationFail);

  // Form validation for Task Description Field min length 5
  if (validateDescription.value.length > 5) {
    validateDescription.classList.add("is-valid");
    validateDescription.classList.remove("is-invalid");
  } else {
    validateDescription.classList.add("is-invalid");
    validateDescription.classList.remove("is-valid");
    validationFail++;
  }

  //log if there's a validation fail to console
  console.log(validationFail);
  // Form validation for Task Assigned Field min length 5
  if (validateAssignedTo.value) {
    validateAssignedTo.classList.add("is-valid");
    validateAssignedTo.classList.remove("is-invalid");
  } else {
    validateAssignedTo.classList.add("is-invalid");
    validateAssignedTo.classList.remove("is-valid");
    validationFail++;
  }
  //log if there's a validation fail to console
  console.log(validationFail);
  // Form validation for Due Date Field not empty
  // try your own validation for a date in the future

  var selectedDate = new Date(validateDueDate.value);
  var now = new Date();
  // console.log("date now ++++" + now + "date entered" + selectedDate);
  if (selectedDate < now) {
     validateDueDate.classList.add("is-invalid");
     validateDueDate.classList.remove("is-valid");
     validationFail++;
    //  alert("Date must be in the future");
     } else {
     validateDueDate.classList.add("is-valid");
     validateDueDate.classList.remove("is-invalid");
     }

  // if (validateDueDate.value) {
  //   validateDueDate.classList.add("is-valid");
  //   validateDueDate.classList.remove("is-invalid");
  // } else {
  //   validateDueDate.classList.add("is-invalid");
  //   validateDueDate.classList.remove("is-valid");
  //   console.log("else block");
  //   validationFail++;
  // }
  
  let whichischecked;

  function displayRadioValue() {
    var ele = document.getElementsByName("options");

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) whichischecked = ele[i].value;
    }
    return whichischecked;
  }
  let newStatus = displayRadioValue();

  // // If validation fails then function will not proceed further and
  //   // will return. The value of validationFail will also needed to be
  //   // reset to 0.
  //   // ----------------------------------------------------------------------------------
  if (validationFail > 0) {
    validationFail = 0;
    return;
  } else {
    // Push the valid input into our task array

    taskManager.addTask(
      validateName.value,
      validateDescription.value,
      validateAssignedTo.value,
      validateDueDate.value,
      newStatus
    );

    clearFormFields();
    taskManager.save(); // task-9
    taskManager.render();
  }
});

const taskList = document.querySelector("#cardContainer");
// // Add an 'onclick' event listener to the Tasks List
taskList.addEventListener("click", (event) => {
  //   // Check if a "Mark As Done" button was clicked
  if (event.target.classList.contains("done-button")) {
    //     // Get the correct parent Task, yours might be slightly different
    //     // Use console.log(event.target.parentElement) to see

    const parentTask = event.target.parentElement.parentElement.parentElement;
    //     // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);

    //     // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);
    //     // Update the task status to 'DONE'

    task.taskStatus = "Done";
    //     // Render the tasks
    taskManager.save();
    taskManager.render();
  }
  
  if (event.target.classList.contains("update-button")) {
    //     // Get the correct parent Task, yours might be slightly different
    //     // Use console.log(event.target.parentElement) to see
    const parentTask = event.target.parentElement.parentElement.parentElement;
    //     // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);

    const textArea = event.target.parentElement.parentElement.parentElement.childNodes[3].childNodes[1]
    const textAreaValue = textArea.value
    console.log(textAreaValue)
    //     // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);
    //     // Update the task status to 'DONE'

    task.comment = textAreaValue;
    // //     // Render the tasks
    taskManager.save();
    taskManager.render();
  }



  // Check if a "Delete" button was clicked
  if (event.target.classList.contains("delete-button")) {
    // Get the parent Task
    const parentTask = event.target.parentElement.parentElement.parentElement;

    // Get the taskId of the parent Task.
    const taskId = Number(parentTask.dataset.taskId);

    // Delete the task
    taskManager.deleteTask(taskId);

    // Save the tasks to localStorage
    taskManager.save();

    // Render the tasks
    taskManager.render();
  }
});
