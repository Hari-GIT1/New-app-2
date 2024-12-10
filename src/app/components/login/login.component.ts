import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _loginServices:LoginService, private _router:Router){}

  public loginForm:FormGroup =new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.minLength(4),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })

submit(){
  this._loginServices.getLogin(this.loginForm.value).subscribe(
    (data:any)=>{
      alert("Login Success .....")
      this._router.navigateByUrl("/dashboard")
    },
    (err:any)=>{alert("Login Failed !!!")}
  )
}

}
