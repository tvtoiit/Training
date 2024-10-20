import { Component } from '@angular/core';
import { ToDoItem } from './todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: ToDoItem[] = [];
  id: number = 1;
  isStatus: number | null = null;
  title: string = '';

  ngOnInit() {
    this.render();
  }

  searchTodo(keyWord: string): ToDoItem[] {
    return this.todos.filter(todo => todo.title.toLowerCase().includes(keyWord.toLowerCase()));
  }

  render(): void {
    // Không cần dùng document.querySelector nữa, Angular sẽ quản lý DOM qua template
  }

  addToDo(): void {
    if (this.title !== '') {
      if (this.isStatus !== null) {
        const todo = this.todos.find(todo => todo.id === this.isStatus);
        if (todo) {
          todo.title = this.title;
        }
        this.isStatus = null;
      } else {
        this.todos.push({ id: this.id++, title: this.title, completed: false });
      }
      this.title = '';
    }
  }

  editToDo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      this.title = todo.title;
      this.isStatus = id;
    }
  }

  deleteToDO(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeCheck(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
