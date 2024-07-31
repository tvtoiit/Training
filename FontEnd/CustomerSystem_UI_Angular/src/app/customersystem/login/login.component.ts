import { Component, ViewChild } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { InputElementComponent } from "../common/input-element/input-element.component";

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    @ViewChild('userName') userNameInput!: InputElementComponent;
    @ViewChild('password') passWordInput!: InputElementComponent;

    user: string = 'Nguyễn Văn A';

    constructor(
        private apiService: ApiService,
        private router: Router
    ) {}

    /**
     * handle login 
     */
    onLogin = () => {
        const userName = this.userNameInput.value;
        const passWord = this.passWordInput.value;

        this.apiService.postData('login/handleLogin', {username: userName, password: passWord })
            .subscribe(
                response => {
                    this.router.navigate(['/search']);
                },
                error => {
                    console.log('Login Errors', error);
                }
            );
        
    } 

    /**
     * clear form login 
     */
    onClear = () => {
        this.userNameInput.value = '';
        this.passWordInput.value = '';
    }

    inputConfig = {
        type: 'text',
        placeholder: 'Enter your username',
        value: '',
        disabled: false
    };

    inputConfig2 = {
        type: 'password',
        placeholder: 'Nhap mat khau',
        value: '',
        disabled: false
    }

    /**
     * Log out session user login
     */
    logoutHandle = () => {

    }
}