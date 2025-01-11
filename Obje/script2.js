class ToDo {
    constructor() {
      
        this.todoList = document.getElementById("todoList");
        this.todoInput = document.getElementById("todoInput");
        this.addButton = document.getElementById("addButton");

        // Add task on button click
        this.addButton.addEventListener("click", () => this.addTask());
    }

    // Add a new task
    addTask() {
        const taskText = this.todoInput.value.trim();
        if (!taskText) return;

        // Create list item
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = taskText;

        // Create Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.className = "btn btn-warning btn-sm me-2";
        completeButton.addEventListener("click", () => this.toggleComplete(li));

        // Create Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.addEventListener("click", () => this.deleteTask(li));

        // Add buttons to list item
        const buttonGroup = document.createElement("div");
        buttonGroup.appendChild(completeButton);
        buttonGroup.appendChild(deleteButton);

        li.appendChild(buttonGroup);

        // Add list item to the To-Do List
        this.todoList.appendChild(li);

        // Clear the input field
        this.todoInput.value = "";
    }

    // Toggle completed state
    toggleComplete(task) {
        task.classList.toggle("text-decoration-line-through");
        task.classList.toggle("text-muted");
    }

    // Delete a task
    deleteTask(task) {
        this.todoList.removeChild(task);
    }
}

// Initialize the To-Do App
const todoApp = new ToDo();