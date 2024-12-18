import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  students:any = [];

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

  
  

}
