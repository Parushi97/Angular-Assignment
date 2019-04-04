import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {MybookingComponent} from './mybooking/mybooking.component';
import { FaqComponent } from './faq/faq.component';
import { AuthGuardService } from '../public/register/auth-guard.service';
//import { RegisterGuard } from '../public/register/register-guard.service';
const myroutes: Routes = [
    {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuardService],
    children:[
      {
        path:'profile',component:ProfileComponent
      },
      
      {
        path:'mybooking',component:MybookingComponent
      },
      {
        path:'faq',component:FaqComponent,canActivate:[AuthGuardService]
      }
      ]
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(myroutes)],
  exports: [RouterModule],
  providers:[AuthGuardService]
})
export class PrivateRoutingModule { }
