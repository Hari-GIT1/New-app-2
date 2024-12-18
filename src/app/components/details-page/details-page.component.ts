import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent {

  students:any = {};

  constructor(private _activatedRoute:ActivatedRoute, private _studentService:StudentsService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        _studentService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.students =data
          }
        )
      }
    )
  }

}
