import { Component, Input } from '@angular/core';
import { Doctor } from '../../models/doctor.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctors-table',
  templateUrl: './doctors-table.component.html',
  styleUrls: ['./doctors-table.component.scss']
})

export class DoctorsTableComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'speciality', 'consultingRoom'];
  @Input()
  dataSource: Doctor[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getDoctors()
  }

  public getDoctors(): Doctor[] {
    this.httpClient.get("assets/doctors.json").subscribe(data => {
      this.dataSource = data as Doctor[];
    })
    return this.dataSource
  }

}

