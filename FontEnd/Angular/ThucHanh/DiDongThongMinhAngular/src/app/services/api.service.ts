import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.example.com'; // Đặt URL của backend 

  constructor(private http: HttpClient) { }

  // Ví dụ hàm để GET dữ liệu từ backend
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }

  // Ví dụ POST dữ liệu tới backend
  postData(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, payload);
  }
  
  // Delete dữ liệu
  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/data/${id}`);
  }
}
