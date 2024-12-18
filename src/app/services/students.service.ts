import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  createStudent(data:any){
    return this._httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data)
  }
  getStudents(){
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students")
  }

}
