import { Component } from '@angular/core';
import { Doctor } from './models/doctor.model';
import { MatDialog } from '@angular/material/dialog';
import { DoctorsFormDialogComponent } from './components/doctors-form-dialog/doctors-form-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.scss']
})
export class DoctoresComponent {
  public doctors: Doctor[] = [];
  constructor(private matDialog: MatDialog, private httpClient: HttpClient) {
    this.doctors = this.getDoctors()
  }

  onCreateDoctor(): void {
    this.matDialog
      // ABRO EL MODAL
      .open(DoctorsFormDialogComponent)
      // Y DESPUES DE QUE CIERRE
      .afterClosed()
      // HAGO ESTO...
      .subscribe({
        next: (v) => {
          if (v) {
            this.doctors = [
              ...this.doctors,
              {
                id_doctor: this.doctors.length + 1,
                name: v.name,
                email: v.email,
                password: v.password,
                surname: v.surname,
                speciality: v.speciality,
                consultingRoom: v.consultingRoom
              },
            ];
          }
        }
      });
  }

  public getDoctors(): Doctor[] {
    this.httpClient.get("assets/doctors.json").subscribe(data => {
      this.doctors = data as Doctor[];
    })
    return this.doctors
  }
}
