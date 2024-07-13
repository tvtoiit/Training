function Validator(options) {
    var formElement = document.querySelector(options.form);

    options.rulues.forEach(function (rulue) {
        var inputElement = formElement.querySelector(rulue.seletor);
        var err = rulue.text(inputElement.value);
        inputElement.onblur = function() {
            if(err) {
                var errorElement = inputElement.parentElement.querySelector('.form-message');
                errorElement.innerHTML = err;
                inputElement.parentElement.classList.add('invalid');
                //console.log(123);
            }else {
                errorElement.innerHTML = '';
                inputElement.parentElement.classList.remove('invalid');
            }
        }

        inputElement.oninput = function () {
            var errorElement = inputElement.parentElement.querySelector('.form-message');
            errorElement.innerHTML = '';
            inputElement.parentElement.classList.remove('invalid');   
        }
    });
}


//Hàm sử dụng
Validator.isRequired = function(seletor) {
    return {
        seletor: seletor,
        text: function (value) {
            return value ? undefined : 'Bạn chưa nhập giá trị !!!';
        }
    }
}

Validator.isEmail = function (seletor) {
    return {
        seletor: seletor,
        text: function () {
            
        }
    }
}