import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    //return this.http.post<any>('http://localhost/Customer_ST_Angular/api/search/handleSearchCustomer.php');
  }
}
