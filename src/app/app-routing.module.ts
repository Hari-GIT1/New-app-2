import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[AuthenticationGuard],children:[
    {path:'create',component:CreateStudentsComponent},
    {path:'students',component:StudentDetailsComponent}
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
