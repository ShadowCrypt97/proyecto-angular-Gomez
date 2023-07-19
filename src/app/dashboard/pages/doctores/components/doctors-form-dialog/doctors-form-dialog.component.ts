import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Doctor } from '../../models/doctor.model';
@Component({
  selector: 'app-doctors-form-dialog',
  templateUrl: './doctors-form-dialog.component.html',
  styleUrls: ['./doctors-form-dialog.component.scss']
})
export class DoctorsFormDialogComponent {
  nameControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2)
  ]);

  surnameControl = new FormControl<string | null>(null, [Validators.required]);
  emailControl = new FormControl<string | null>(null);
  passwordControl = new FormControl<string | null>(null, [Validators.required]);
  specialityControl = new FormControl<string | null>(null, [Validators.required]);
  consultingRoomControl = new FormControl<string | null>(null, [Validators.required]);

  doctorForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
    speciality: this.specialityControl,
    consultingRoom: this.consultingRoomControl
  });

  constructor(
    private dialogRef: MatDialogRef<DoctorsFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: Doctor
  ) {
    if (this.data) {
      this.nameControl.setValue(this.data.name);
      this.surnameControl.setValue(this.data.surname);
      this.passwordControl.setValue(this.data.password);
      this.emailControl.setValue(this.data.email || 'null');
      this.specialityControl.setValue(this.data.speciality);
      this.consultingRoomControl.setValue(this.data.consultingRoom.toString())
    }
  }

  onSubmit(): void {
    if (this.doctorForm.invalid) {
      this.doctorForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.doctorForm.value);
    }
  }
}
