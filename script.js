const todoInput = document.getElementById('taskInput');  
const addTodoButton = document.getElementById('btn');    
const resetTodoButton = document.getElementById('resetBtn'); 
const todoList = document.getElementById('taskList');    
const taskCountDisplay = document.getElementById('taskCount');

const API_URL = 'http://localhost:5001/api/todos';
let totalTasks = 0;
let completedTasks = 0;

const fetchTodos = async () => {
    const response = await fetch(API_URL);
    const todos = await response.json();
    
    totalTasks = todos.length;
    completedTasks = todos.filter(todo => todo.completed).length;
    
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.classList.add('task-item');  

        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        todoText.classList.add('task-text');
        
        if (todo.completed) {
            li.classList.add('completed'); // Add class if task is completed
        }

        // Toggle completion status on click
        todoText.addEventListener('click', () => toggleComplete(todo._id, todo.completed));

        const buttonContainer = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', () => enableEditMode(li, todo._id, todo.text));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteTodo(todo._id));

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(todoText);
        li.appendChild(buttonContainer);
        todoList.appendChild(li);
    });

    updateTaskCount();
};

// Enable edit mode with "Save" and "Cancel"
const enableEditMode = (li, id, originalText) => {
    li.innerHTML = '';  // Clear the task item content

    const input = document.createElement('input');
    input.type = 'text';
    input.value = originalText;
    input.classList.add('task-text');
    li.appendChild(input);

    const buttonContainer = document.createElement('div');

    // Save button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.classList.add('save-button');
    saveButton.addEventListener('click', () => saveEdit(id, input.value));

    // Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-button');
    cancelButton.addEventListener('click', () => cancelEdit(li, originalText));

    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(cancelButton);
    li.appendChild(buttonContainer);
};

// Save the edited task
const saveEdit = async (id, newText) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: newText })
    });
    fetchTodos();
};

// Cancel the edit and restore the original text
const cancelEdit = (li, originalText) => {
    li.innerHTML = '';  // Clear the task item content

    const todoText = document.createElement('span');
    todoText.textContent = originalText;
    todoText.classList.add('task-text');
    li.appendChild(todoText);

    const buttonContainer = document.createElement('div');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => enableEditMode(li, originalText));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => deleteTodo(todo._id));

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    li.appendChild(buttonContainer);
};

// Toggle completion status
const toggleComplete = async (id, isCompleted) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: !isCompleted })
    });
    fetchTodos(); // Re-fetch tasks and update UI
};

// Add a new todo and update count
const addTodo = async () => {
    const todoText = todoInput.value;
    if (todoText) {
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: todoText, completed: false }) // Add new task as not completed
        });
        todoInput.value = '';
        fetchTodos();
    }
};

// Delete a todo and update count
const deleteTodo = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    fetchTodos();
};

// Update task count display
const updateTaskCount = () => {
    taskCountDisplay.textContent = `Tasks: ${totalTasks} | Completed: ${completedTasks}`;
};

resetTodoButton.addEventListener('click', () => {
    todoList.innerHTML = ''; 
    totalTasks = 0;
    completedTasks = 0;
    updateTaskCount();        
});


addTodoButton.addEventListener('click', addTodo);
fetchTodos();
