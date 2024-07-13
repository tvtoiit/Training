function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    //Làm sao để lặp lỗi lại qua mà tất cả không bị ghi đè, chứa các rules(2)
    var selectorRules = {};

    //Lấy elemant cua form cần validate
    
    //hàm validate của form
    function validate(inputElement, rules) {



        var errorElement = getParent(inputElement, options.formGroupselector).querySelector(options.errroElement);
        var errorMessage;
        //Lấy qua các rules của selector
        var rulue = selectorRules[rules.selector];
        //lặp qua các rules
        for(var i = 0; i < rulue.length; ++i){
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rulue[i](
                        formElement.querySelector(rules.selector + ':checked')
                    );
                break;

                default:
                    errorMessage = rulue[i](inputElement.value);

            }
            //khi có lỗi thì thoát khỏi vòng lặp
            if(errorMessage)
            break;
        }
        if(errorMessage) {

            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupselector).classList.add('invalid');
        }else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupselector).classList.remove('invalid');

        }
        return !errorMessage;
    }

    var formElement = document.querySelector(options.form);
    if(formElement) {
        //khi suubmit form element
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;
            //Lặp qua từng rules và validator
            options.rules.forEach( function (rules) {
                var inputElement = formElement.querySelector(rules.selector);
                
                var isVlalid = validate(inputElement, rules); 

                if (!isVlalid) {
                    isFormValid = false;
                }
            });
            
            
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    
                    var enableInput = formElement.querySelectorAll('[name]');
        
                    var formValues = Array.from(enableInput).reduce(function (values, input) {
                        
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name = "' + input.name + '"]:checked').value;
                                    break;
                                case 'checkbox':
                                    if (!input.matches(':checked')) {
                                        values[input.name] = ''; 
                                        return values;
                                    }

                                    if (!Array.isArray(values[input.name])) {
                                        values[input.name] = [];    
                                    }

                                    values[input.name].push(input.value);

                                break;

                                case 'file':
                                    values[input.name] = input.files;
                                    break;
                            default: 
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
            } 
        }


        //lặp qua mỗi rules và xử lí (lắng nghe sự kiện blur, input ...)
        options.rules.forEach( function (rules) {

            //Lưu lại các rules cho mỗi input(2)
            if (Array.isArray(selectorRules[rules.selector])) {
                selectorRules[rules.selector].push(rules.text);
            }else {
                selectorRules[rules.selector] = [rules.text];
            }
            var inputElements = formElement.querySelectorAll(rules.selector);
            Array.from(inputElements).forEach(function(inputElement) {

                inputElement.onblur = function () {
                    validate(inputElement, rules); 
                }
    
                //xử lí khi có lỗi lại nhập tiếp
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupselector).querySelector(options.errroElement);
                    errorElement.innerHTML = '';
                    getParent(inputElement, options.formGroupselector).classList.remove('invalid');   
                }
            });
        });
    }
}


//Định nghĩa các rute
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        text: function (value) {
            return value ? undefined : 'Vui lòng điền vào trường này!!!';
        }
    };
}


Validator.isEmail = function(selector) {
    return {
        selector: selector,
        text: function (value) {
            var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return regex.test(value) ? undefined : 'Trường này phải là email!!!';
        }
    };
}

//pass word
Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        text: function (value) {

            return value.length ? undefined : `Bạn phải nhập tối thiểu ${min} kí tự`;
            
        }
    };
}

Validator.Confirmed = function(selector, getconfirm, mess) {
    return {
        selector: selector,
        text: function (value) {         
            return value === getconfirm() ? undefined : mess || 'Giá trị nhập vào không chính xac!!!';
        }
    };
}