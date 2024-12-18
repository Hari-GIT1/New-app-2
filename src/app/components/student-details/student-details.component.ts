import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  students:any = [];
  limit:number=0;
  page:number=0;
  order:string = "";
  value:string = "";
  term:string ="";

  constructor(private _studentsServices:StudentsService){

    _studentsServices.getStudents().subscribe(
      (data:any)=>{
        this.students =data
      },
      (err:any)=>{
        alert("INTERNAL SERVER ERROR")
      }
    )
  }
  pagination(){
    this._studentsServices.getPagedStudents(this.limit,this.page).subscribe(
      (data:any)=>{
        this.students =data
      }
    )
  }
  sort(){
    this._studentsServices.getSortedStudents(this.order,this.value).subscribe(
      (data:any)=>{
        this.students =data
      }
    )
}
  filtering(){
    this._studentsServices.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students =data
      }
    )
  }
}