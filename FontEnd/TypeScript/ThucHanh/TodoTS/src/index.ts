interface ToDoItem{
    id: number,
    title: string,
    completed: false
}


class ToDoApp {
    // Thuoc tinh: property
    private todos: ToDoItem[] = [];
    private id: number = 1;
    
    // Phuong thuc: method
    constructor() {
        this.inIt();
    }

    private inIt = (): void => {
        const searchInput = document.getElementById('search-input') as HTMLInputElement;
        const addBtn = document.querySelector('#add-todo') as HTMLButtonElement;
        searchInput.addEventListener('click', () => this.render());
        addBtn.addEventListener('click', () => this.addTodo());
        this.render();
    }

    private searchToDo = (keyword: string):  ToDoItem[] => {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    private render = (): void => {
        const todoList = document.querySelector('#todo-list') as HTMLUListElement;
        const searchInput = document.getElementById('search-input') as HTMLInputElement;
        const todoRender = this.searchToDo(searchInput.value);
        
        todoList.innerHTML = "";
        todoRender.forEach(todo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox"/>
                <span>${todo.title}</span>
            
            `;
            todoList.appendChild(li);
        })

    }

    private addTodo = (): void => {
        const addInput = document.querySelector('#todo-input') as HTMLInputElement;
        const title = addInput.value;

        if (title != "") {
            this.todos.push({id: this.id++, title, completed: false});
            addInput.value = '';
            this.render();
        }
    }

}

new ToDoApp();

