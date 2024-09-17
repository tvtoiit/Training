interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

class TodoApp {
    // Thuộc tính
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    constructor() {
        this.initialize();
    }
    // Phương thức
    private initialize(): void {
        const addButton = document.getElementById('add-todo') as HTMLButtonElement;
        const searchInput = document.getElementById('search-input') as HTMLInputElement;

        addButton.addEventListener('click', () => this.addTodo());
        searchInput.addEventListener('input', () => this.render());

        this.render();
    }

    private addTodo(): void {
        const input = document.getElementById('todo-input') as HTMLInputElement;
        const title = input.value.trim();

        if (title !== '') {
            this.todos.push({ id: this.nextId++, title, completed: false });
            input.value = '';
            this.render();
        }
    }

    private deleteTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.render();
    }

    private toggleComplete(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.render();
        }
    }

    private editTodoTitle(id: number): void {
        const newTitle = prompt("Edit task title:");
        if (newTitle !== null && newTitle.trim() !== '') {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.title = newTitle.trim();
                this.render();
            }
        }
    }

    private searchTodos(keyword: string): TodoItem[] {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(keyword.toLowerCase()));
    }

    private render(): void {
        const todoList = document.getElementById('todo-list') as HTMLUListElement;
        const searchInput = document.getElementById('search-input') as HTMLInputElement;
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
                const id = parseInt((e.target as HTMLInputElement).getAttribute('data-id')!, 10);
                this.toggleComplete(id);
            });
        });

        todoList.querySelectorAll('.edit').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt((e.target as HTMLButtonElement).getAttribute('data-id')!, 10);
                this.editTodoTitle(id);
            });
        });

        todoList.querySelectorAll('.delete').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt((e.target as HTMLButtonElement).getAttribute('data-id')!, 10);
                this.deleteTodo(id);
            });
        });
    }
}

// Khởi tạo ứng dụng
new TodoApp();
