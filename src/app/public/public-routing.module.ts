import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../public/register/register.component';
import { SignupComponent } from '../public/signup/signup.component';
import { DashboardComponent } from '../private/dashboard/dashboard.component';
import { PublicComponent } from './public.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { RegisterGuard } from './register/register-guard.service';

const myroutes: Routes = [
    // {path: '', redirectTo: '/register', pathMatch: 'full'},
    // {path:'', component: PublicComponent},
    {path:'', component: RegisterComponent},
    {path:'register', component: RegisterComponent},
    {path: 'signup', component: SignupComponent},
    //{path: '**', component: DashboardComponent}
    
];

@NgModule({
  imports: [MatTabsModule,BrowserAnimationsModule,RouterModule.forChild(myroutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
