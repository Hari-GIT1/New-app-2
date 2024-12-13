import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.scss']
})
export class CreateStudentsComponent {

  studentForm:FormGroup = new FormGroup({
    name:new FormControl(),
    gender:new FormControl(),
    mobile:new FormControl(),
    email:new FormControl(),
    batch:new FormControl()
  })


  submit(){
    console.log(this.studentForm.value)
  }
}
