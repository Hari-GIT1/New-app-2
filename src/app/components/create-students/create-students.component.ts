import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.scss']
})
export class CreateStudentsComponent {

  digit:string ="";

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
    company:new FormGroup({
      name:new FormControl('',[Validators.required]),
      location:new FormControl('',[Validators.required]),
      package:new FormControl('',[Validators.required]),
      offerDate:new FormControl('',[Validators.required]),
    }), 
    sourceType:new FormControl('',[Validators.required]),

  })

  constructor(private _studentsService:StudentsService, private _activatedRoute:ActivatedRoute){
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
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.digit=data.id;
        console.log(data)
        _studentsService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.studentForm.patchValue(data);
          }
        )
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

    if(this.digit){
      this._studentsService.updateStudent(this.digit,this.studentForm.value).subscribe(
        (data:any)=>{
          alert("updated successfully");
        },
        (err:any)=>{
          alert("Error in updation")
        }
      )
    }
    else{
      this._studentsService.createStudent(this.studentForm.value).subscribe(
        (data:any)=>{
          alert("Student Details Added Succefully")
        },
        (err:any)=>{
          alert("Student Details Additon Failed")
        }
      )
    }

  }


}
