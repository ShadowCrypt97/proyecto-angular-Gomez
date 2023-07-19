import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from '../shared/shared.module';
import { DoctoresModule } from './pages/doctores/doctores.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    DoctoresModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
