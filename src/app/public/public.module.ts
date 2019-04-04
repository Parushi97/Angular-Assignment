import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import{PrivateModule} from '../private/private.module';
import { ConfirmPasswordDirective } from './register/checkpass.directive';
import { PublicComponent } from './public.component';
import {MatTabsModule} from '@angular/material/tabs';

//import { RegisterGuard } from './register/register-guard.service';
@NgModule({
declarations: [RegisterComponent,SignupComponent,ConfirmPasswordDirective, PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    PrivateModule,
    MatTabsModule
  ],
providers:[]
})


export class PublicModule { }
