/**
 * 1. Ba cách tạo class trong javascript -> OK
 * 2. Cách xử lí lỗi với try catch -> tam bo qua
 * 3. Hiểu hơn về từ khóa this
 * 4. Hàm closure
 * 5. CallBack 
 * 6. Hiểu hơn về bind()
 * 7. Hiểu hơn về call() và apply
 * 8. Anonymous function 
 * 9. Thực hành từ khóa this
 * 10. prototype 
 */

const User = {
    //thuoc tinh
    userName : '',
    passWord : '',
    setInfo : function(userName, passWord) {
        this.userName = userName;
        this.passWord = passWord;
    },
    isCheckLogin : function() {
        return(this.userName === 'admin' && this.passWord === '@123');
    }
}

User.setInfo('admin', '@123');
console.log(User.isCheckLogin());