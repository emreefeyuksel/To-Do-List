document.addEventListener('DOMContentLoaded', loadTodos);

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        addTodoElement(todo);
    });
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText !== "") {
        addTodoElement(todoText);
        saveTodo(todoText);
        input.value = ""; // Clear the input after adding
    } else {
        alert("Please enter a task!");
    }
}

function addTodoElement(todoText) {
    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = todoText;

    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        listItem.remove();
        removeTodoFromLocalStorage(todoText);
    };

    // Append delete button to the list item
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);
}

function removeTodoFromLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter(todo => todo !== todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function saveTodo(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}
