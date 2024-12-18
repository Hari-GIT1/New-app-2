import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl:string = "https://62b9299dff109cd1dc8ca34f.mockapi.io/students";

  constructor(private _httpClient:HttpClient) { }

  createStudent(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }
  getStudents():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  getStudent(id:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }
  getPagedStudents(limit:number,page:number):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit="+limit+"&page="+page)
  }
  getSortedStudents(order:string,value:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?sortBy="+value+"&order"+order)
  }
  getFilteredStudents(term:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter="+term)
  }
  deleteStudents(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }

  updateStudent(digit:string,data:any):Observable<any>{
    return this._httpClient.put("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+digit,data)
  }

}
