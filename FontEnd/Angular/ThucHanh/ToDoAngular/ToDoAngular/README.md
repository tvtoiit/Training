# ToDoAngular
1. Tạo dự án Angular mới
ng new todo-app
cd todo-app

2. Tạo component cho ứng dụng Todo
Chạy lệnh sau để tạo component Todo:
ng generate component todo

3. Tạo interface cho ToDoItem
Trong Angular, bạn có thể đặt interface trong một file riêng, chẳng hạn src/app/todo/todo-item.ts:

4. Chuyển class ToDOApp sang Angular component
Mở file src/app/todo/todo.component.ts và di chuyển logic từ ToDOApp vào đây:

5. Tạo giao diện trong Angular (template)
Chuyển HTML trước đây thành template Angular. Mở file src/app/todo/todo.component.html và chuyển giao diện cũ của bạn vào đây, sử dụng Angular binding và event handling:

6. Cấu hình FormsModule cho ngModel
Vì bạn đang sử dụng ngModel cho binding dữ liệu, hãy thêm FormsModule vào module của bạn.

Mở file src/app/app.module.ts:

7. Thêm component Todo vào ứng dụng
Cuối cùng, mở file src/app/app.component.html và thêm component Todo vào:

8. Chạy ứng dụng
Chạy lệnh sau để kiểm tra ứng dụng:
ng serve