import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctoresComponent } from './doctores.component';
import { DoctorsFormDialogComponent } from './components/doctors-form-dialog/doctors-form-dialog.component';
import { DoctorsTableComponent } from './components/doctors-table/doctors-table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DoctoresComponent,
    DoctorsFormDialogComponent,
    DoctorsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DoctoresComponent
  ]
})
export class DoctoresModule { }
