import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl:string = "https://62b9299dff109cd1dc8ca34f.mockapi.io/students";

  constructor(private _httpClient:HttpClient) { }

  createStudent(data:any){
    return this._httpClient.post(this.baseUrl,data)
  }
  getStudents(){
    return this._httpClient.get(this.baseUrl)
  }
  getPagedStudents(limit:number,page:number){
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit="+limit+"&page="+page)
  }

}
