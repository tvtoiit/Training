/**
 * 1. Cách gán giá trị cho thẻ input
 * 2. Validate form bằng javascript
 * 3. Thiết lập checkbox checked bằng javascript
 * 4. Lấy giá trị checkbox checked bằng javascript
 * 5. Bắt xự kiện checkbox 
 * 6. Tạo check all và un check all
 * 7. Lấy giá trị của radio button checked bằng javascript
 * 8. Bắt sự kiện onChange của thẻ select
 * 9. Lấy giá trị của thẻ select Multiple
 * 10. Chuyển đổi phần tử của 2 thẻ select multiple
 */

//get value element
getValue = (id) => {
    return document.getElementById(id).value.trim();
}

//show input errors
showMessage = (key, mess) => {
    document.getElementById(key + '_err').innerHTML = mess;
}

validate = () => {
    var flag = true;
    
    //check username
    var username = getValue('username');
    if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)) {
        flag = false;
        showMessage('username', 'Vui long kiem tra lai username');
    }

    //check password
    var password = getValue('password');
    var rePassword = getValue('repassword');
    if (password == '' || password.length < 8 || password != rePassword) {
        flag = false;
        showMessage('username', 'Vui long kiem tra lai password');
    }

    // 3. Phone
    var phone = getValue('phone');
    if (phone != '' &&  !/^[0-9]{10}$/.test(phone)){
        flag = false;
        showError('phone', 'Vui lòng kiểm tra lại Phone');
    }
     
    // 4. Email
    var email = getValue('email');
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!mailformat.test(email)){
        flag = false;
         
        showError('phone', 'Vui lòng kiểm tra lại Email');
    }
     
    return flag;
}