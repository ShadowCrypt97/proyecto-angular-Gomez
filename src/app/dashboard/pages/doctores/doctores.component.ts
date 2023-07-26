import { Component } from '@angular/core';
import { Doctor } from './models/doctor.model';
import { MatDialog } from '@angular/material/dialog';
import { DoctorsFormDialogComponent } from './components/doctors-form-dialog/doctors-form-dialog.component';
import { DoctoresService } from './doctores.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.scss']
})
export class DoctoresComponent {
  public doctors$: Observable<Doctor[]>;
  constructor(private matDialog: MatDialog, private doctorService: DoctoresService, private notificationService: NotificationService) {
    this.doctorService.loadUsers();
    this.doctors$ = this.doctorService.getDoctors();
  }

  onCreateDoctor(): void {
    this.matDialog
      .open(DoctorsFormDialogComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (v) {
            this.doctorService.createDoctor({
              name: v.name,
              email: v.email,
              password: v.password,
              surname: v.surname,
              speciality: v.speciality,
              consultingRoom: v.consultingRoom
            })
            this.notificationService.sendSuccessNotification('Doctor created succesfully')
          }
        }
      });
  }

  onDeleteDoctor(doctor: Doctor): void {
    this.notificationService.sendConfirm("You won't be able to revert this!", `¿Are you sure to delete doctor ${doctor.name}?`)
      .then((result) => {
        if (result.isConfirmed) {
          this.doctorService.deleteDoctorById(doctor.id_doctor);
          this.notificationService.sendSuccessNotification(`The doctor ${doctor.name} has been deleted.`, 'Deleted!');
        }
      })
  }

  onEditDoctor(doctorToEdit: Doctor): void {
    this.matDialog
      .open(DoctorsFormDialogComponent, {
        data: doctorToEdit
      })
      .afterClosed()
      .subscribe({
        next: (doctorUpdated) => {
          if (doctorUpdated) {
            this.doctorService.updateDoctorById(doctorToEdit.id_doctor, doctorUpdated);
            this.notificationService.sendSuccessNotification('Doctor modified succesfully');
          }
        }
      });
  }
}
