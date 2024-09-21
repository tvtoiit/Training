"use strict";
class ToDoApp {
    // Phuong thuc: method
    constructor() {
        // Thuoc tinh: property
        this.todos = [];
        this.id = 1;
        this.inIt = () => {
            const searchInput = document.getElementById('search-input');
            const addBtn = document.querySelector('#add-todo');
            searchInput.addEventListener('click', () => this.render());
            addBtn.addEventListener('click', () => this.addTodo());
            this.render();
        };
        this.searchToDo = (keyword) => {
            return this.todos.filter(todo => todo.title.toLowerCase().includes(keyword.toLowerCase()));
        };
        this.render = () => {
            const todoList = document.querySelector('#todo-list');
            const searchInput = document.getElementById('search-input');
            const todoRender = this.searchToDo(searchInput.value);
            todoList.innerHTML = "";
            todoRender.forEach(todo => {
                const li = document.createElement('li');
                li.innerHTML = `
                <input type="checkbox"/>
                <span>${todo.title}</span>
            
            `;
                todoList.appendChild(li);
            });
        };
        this.addTodo = () => {
            const addInput = document.querySelector('#todo-input');
            const title = addInput.value;
            if (title != "") {
                this.todos.push({ id: this.id++, title, completed: false });
                addInput.value = '';
                this.render();
            }
        };
        this.inIt();
    }
}
new ToDoApp();
