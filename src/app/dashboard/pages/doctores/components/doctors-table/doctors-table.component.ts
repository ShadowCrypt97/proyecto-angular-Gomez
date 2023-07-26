import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-doctors-table',
  templateUrl: './doctors-table.component.html',
  styleUrls: ['./doctors-table.component.scss']
})

export class DoctorsTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'speciality', 'consultingRoom', 'actions'];

  @Input()
  dataSource: Doctor[] = [];

  @Output()
  deleteDoctor = new EventEmitter<Doctor>();

  @Output()
  editDoctor = new EventEmitter<Doctor>();

  constructor() { }

}

