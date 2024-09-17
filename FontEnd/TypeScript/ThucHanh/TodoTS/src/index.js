"use strict";
class TodoApp {
    constructor() {
        this.todos = [];
        this.nextId = 1;
        this.initialize();
    }
    initialize() {
        const addButton = document.getElementById('add-todo');
        const searchInput = document.getElementById('search-input');
        addButton.addEventListener('click', () => this.addTodo());
        searchInput.addEventListener('input', () => this.render());
        this.render();
    }
    addTodo() {
        const input = document.getElementById('todo-input');
        const title = input.value.trim();
        if (title !== '') {
            this.todos.push({ id: this.nextId++, title, completed: false });
            input.value = '';
            this.render();
        }
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.render();
    }
    toggleComplete(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.render();
        }
    }
    editTodoTitle(id) {
        const newTitle = prompt("Edit task title:");
        if (newTitle !== null && newTitle.trim() !== '') {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.title = newTitle.trim();
                this.render();
            }
        }
    }
    searchTodos(keyword) {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(keyword.toLowerCase()));
    }
    render() {
        const todoList = document.getElementById('todo-list');
        const searchInput = document.getElementById('search-input');
        const todosToRender = this.searchTodos(searchInput.value);
        todoList.innerHTML = '';
        todosToRender.forEach(todo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
                <span ${todo.completed ? 'style="text-decoration: line-through;"' : ''}>${todo.title}</span>
                <button class="edit" data-id="${todo.id}">Edit</button>
                <button class="delete" data-id="${todo.id}">Delete</button>
            `;
            todoList.appendChild(li);
        });
        // Thêm sự kiện cho nút checkbox, edit, và delete
        todoList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'), 10);
                this.toggleComplete(id);
            });
        });
        todoList.querySelectorAll('.edit').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'), 10);
                this.editTodoTitle(id);
            });
        });
        todoList.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'), 10);
                this.deleteTodo(id);
            });
        });
    }
}
// Khởi tạo ứng dụng
new TodoApp();
