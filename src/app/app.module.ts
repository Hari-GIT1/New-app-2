import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { PackagePipe } from './pipes/package.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CreateStudentsComponent,
    StudentDetailsComponent,
    HomeComponent,
    DetailsPageComponent,
    PercentagePipe,
    PackagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
