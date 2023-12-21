

// Function to add a new task
function addTask() {

    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Checking if the input is not empty
    if (taskInput.value.trim() !== '') {
        // Creating a new list item
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onclick="toggleCompletion(this)">
            <span>${taskInput.value}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Appending the new task to the task list
        taskList.appendChild(li);

        // Clearing the input field
        taskInput.value = '';
    }
}



// Function to toggle task completion
function toggleCompletion(checkbox) {
    const li = checkbox.parentNode;
    li.classList.toggle('completed');
}

// Function to edit a task
function editTask(button) {
    const li = button.parentNode;
    const span = li.querySelector('span');
    const input = document.createElement('input');
    input.value = span.textContent;
    
    // Replacing the span with an input field
    li.replaceChild(input, span);

    // Changing the button to "Save"
    button.textContent = 'Save';
    button.onclick = function() {
        saveTask(li);
    };

    // Adding a class to indicate editing mode
    li.classList.add('editing');

    // Focusing on the input field
    input.focus();
}

// Function to save the edited task
function saveTask(li) {
    const input = li.querySelector('input');
    const span = document.createElement('span');
    span.textContent = input.value;

    // Replacing the input field with the new span
    li.replaceChild(span, input);

    // Changing the button back to "Edit"
    const editButton = li.querySelector('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        editTask(editButton);
    };

    // Removing the class indicating editing mode
    li.classList.remove('editing');
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentNode;
    const taskList = document.getElementById('taskList');
    taskList.removeChild(li);
}
