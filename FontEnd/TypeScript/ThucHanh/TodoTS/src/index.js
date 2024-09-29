"use strict";
class ToDOApp {
    constructor() {
        this.todos = [];
        this.id = 1;
        this.isStatus = null;
        this.inIt = () => {
            const addButton = document.querySelector('#add-todo');
            const searchBtn = document.querySelector('#search-input');
            searchBtn.addEventListener('click', () => this.render());
            addButton.addEventListener('click', () => this.addToDo());
            this.render();
        };
        this.searchTodo = (keyWord) => {
            return this.todos.filter(todo => todo.title.toLowerCase().includes(keyWord.toLowerCase()));
        };
        this.render = () => {
            const todoList = document.querySelector('#todo-list');
            const searchBtn = document.querySelector('#search-input');
            const todoRenders = this.searchTodo(searchBtn.value);
            todoList.innerHTML = "";
            todoRenders.forEach(todo => {
                const li = document.createElement('li');
                li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}"/>
                <span ${todo.completed ? 'style="color: red"' : ''}>${todo.title}</span>
                <button class="edit" data-id="${todo.id}">Edit</button>
                <button class="delete" data-id="${todo.id}">Delete</button>
            `;
                todoList.appendChild(li);
            });
            todoList.querySelectorAll('.edit').forEach(button => {
                button.addEventListener('click', e => {
                    const id = parseInt(e.target.getAttribute('data-id'), 10);
                    this.editToDo(id);
                });
            });
            todoList.querySelectorAll('.delete').forEach(button => {
                button.addEventListener('click', e => {
                    const id = parseInt(e.target.getAttribute('data-id'), 10);
                    this.deleteToDO(id);
                });
            });
            todoList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', e => {
                    const id = parseInt(e.target.getAttribute('data-id'), 10);
                    this.completeCheck(id);
                });
            });
        };
        this.addToDo = () => {
            const addInput = document.querySelector('#todo-input');
            const addButton = document.querySelector('#add-todo');
            const title = addInput.value;
            if (title != '') {
                if (this.isStatus !== null) {
                    // Thuc hien sua
                    const todo = this.todos.find(todo => todo.id === this.isStatus);
                    if (todo) {
                        todo.title = title;
                    }
                    this.isStatus = null;
                    addButton.innerHTML = "Add";
                }
                else {
                    // Thuc hien them
                    this.todos.push({ id: this.id++, title, completed: false });
                }
                addInput.value = '';
                this.render();
            }
        };
        this.editToDo = (id) => {
            const addInput = document.querySelector('#todo-input');
            const addButton = document.querySelector('#add-todo');
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                addInput.value = todo.title;
                this.isStatus = id;
                addButton.innerHTML = "Edit";
            }
        };
        this.deleteToDO = (id) => {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.render();
        };
        this.completeCheck = (id) => {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                this.render();
            }
        };
        this.inIt();
    }
}
new ToDOApp();
