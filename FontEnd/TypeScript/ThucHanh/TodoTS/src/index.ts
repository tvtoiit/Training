interface ToDoItem {
    id: number,
    title: string,
    completed: boolean
}

class ToDOApp {
    private todos: ToDoItem[] = [];
    private id: number = 1;
    private isStatus: number | null = null;

    constructor() {
        this.inIt();
    }

    private inIt = (): void => {
        const addButton = document.querySelector('#add-todo') as HTMLButtonElement;
        const searchBtn = document.querySelector('#search-input') as HTMLInputElement;
        searchBtn.addEventListener('click', () => this.render());
        addButton.addEventListener('click', () => this.addToDo());
        this.render();
    }

    private searchTodo = (keyWord: string):  ToDoItem[] => {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(keyWord.toLowerCase()));
    }

    private render = (): void => {
        const todoList = document.querySelector('#todo-list') as HTMLUListElement;
        const searchBtn = document.querySelector('#search-input') as HTMLInputElement;
        
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
                const id = parseInt((e.target as HTMLButtonElement).getAttribute('data-id')!, 10);
                this.editToDo(id);
            });
        });

        todoList.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', e => {
                const id = parseInt((e.target as HTMLButtonElement).getAttribute('data-id')!, 10);
                this.deleteToDO(id);
            });
        });

        todoList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', e => {
                const id = parseInt((e.target as HTMLInputElement).getAttribute('data-id')!, 10);
                this.completeCheck(id);
            });
        });
    }

    private addToDo = (): void => {
        const addInput = document.querySelector('#todo-input') as HTMLInputElement;
        const addButton = document.querySelector('#add-todo') as HTMLButtonElement;
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
            } else {
                // Thuc hien them
                this.todos.push({id: this.id++, title, completed: false})
            }
            addInput.value = '';
            this.render();
        }
    }

    private editToDo = (id: number): void => {
        const addInput = document.querySelector('#todo-input') as HTMLInputElement;
        const addButton = document.querySelector('#add-todo') as HTMLButtonElement;

        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            addInput.value = todo.title;
            this.isStatus = id;
            addButton.innerHTML = "Edit";
        } 
    }

    private deleteToDO = (id: number): void => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.render();
    }

    private completeCheck = (id: number): void => {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.render();
        }
    }
}

new ToDOApp();