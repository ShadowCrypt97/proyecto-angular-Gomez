import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Doctor } from '../../models/doctor.model';
@Component({
  selector: 'app-doctors-form-dialog',
  templateUrl: './doctors-form-dialog.component.html',
  styleUrls: ['./doctors-form-dialog.component.scss']
})
export class DoctorsFormDialogComponent {
  editingDoctor?: Doctor;
  doctorForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DoctorsFormDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private data?: Doctor
  ) {
    this.doctorForm = this.formBuilder.group(
      {
        name: [null, [
          Validators.required,
          Validators.minLength(2)
        ]
        ],
        surname: [null, [Validators.required]],
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
        speciality: [null, [Validators.required]],
        consultingRoom: [null, [Validators.required]],
      }
    )

    if (this.data) {
      this.editingDoctor = this.data;
      this.doctorForm.get('name')?.setValue(this.data.name);
      this.doctorForm.get('surname')?.setValue(this.data.surname);
      this.doctorForm.get('password')?.setValue(this.data.password);
      this.doctorForm.get('email')?.setValue(this.data.email || 'null');
      this.doctorForm.get('speciality')?.setValue(this.data.speciality);
      this.doctorForm.get('consultingRoom')?.setValue(this.data.consultingRoom.toString())
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
