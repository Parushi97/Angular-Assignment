import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivateRoutingModule } from './private-routing.module';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { providerDef } from '@angular/core/src/view';
import { UpdateService } from './profile/update.service';
import { FaqComponent } from './faq/faq.component';
import { AuthGuardService } from '../public/register/auth-guard.service';
import { GetService } from './mybooking/get.service';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, MybookingComponent, FaqComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrivateRoutingModule,
    MatTabsModule,
  ],
  providers:[UpdateService,AuthGuardService,GetService]
})
export class PrivateModule { }
