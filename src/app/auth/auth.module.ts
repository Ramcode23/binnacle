import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { AuthroutingModule } from './authrouting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    AuthroutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, () => 'binnace', environment.ngx)
  ]
})
export class AuthModule { }
