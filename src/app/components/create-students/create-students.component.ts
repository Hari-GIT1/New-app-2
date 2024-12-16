import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.scss']
})
export class CreateStudentsComponent {

  studentForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    mobile:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    batch:new FormControl('',[Validators.required]),

    address:new FormGroup({

      city:new FormControl('',[Validators.required]),
      mandal:new FormControl('',[Validators.required]),
      district:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required])

    }),
    education:new FormArray([]),
    companyDetails:new FormGroup({
      name:new FormControl('',[Validators.required]),
      location:new FormControl('',[Validators.required]),
      package:new FormControl('',[Validators.required]),
      offerDate:new FormControl('',[Validators.required]),
    }),
    sourceType:new FormControl('',[Validators.required]),

  })

  constructor(){
    this.studentForm.get('sourceType')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='Direct'){
          this.studentForm.addControl('sourceFrom', new FormControl())
          this.studentForm.removeControl('referalName')
        }
        else{
          this.studentForm.addControl('referalName',new FormControl())
          this.studentForm.removeControl('SourceFrom')
        }
      }
    )


  }

  get educationFormArray(){
    return this.studentForm.get('education') as FormArray;
  }
  addEdu(){
    this.educationFormArray.push(
      new FormGroup({
        qualification:new FormControl('',[Validators.required]),
        year: new FormControl('',[Validators.required]),
        percentage:new FormControl('',[Validators.required]),
      })
    )

  }
  eduDel(i:number){
    this.educationFormArray.removeAt(i)
  }

  submit(){
    console.log(this.studentForm.value)
  }
}
