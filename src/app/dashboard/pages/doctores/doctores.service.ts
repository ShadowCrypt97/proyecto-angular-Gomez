import { Injectable } from '@angular/core';
import { CreateDoctor, Doctor, UpdateDoctor } from './models/doctor.model';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const USER_DB: Observable<Doctor[]> = of(
  [
    {
      id_doctor: 1,
      name: "Camila",
      surname: "Cuervo",
      speciality: "Odontología",
      email: "camila.cuervo@gmail.com",
      consultingRoom: 102,
      password: "aws123$!"
    },
    {
      id_doctor: 2,
      name: "Carlos",
      surname: "Caceres",
      speciality: "Medicina General",
      consultingRoom: 100,
      password: "aws123*"
    },
    {
      id_doctor: 3,
      name: "Alveiro",
      surname: "Tarsisio",
      speciality: "Ortopedia",
      email: "alveiro.tarsicio@gmail.com",
      consultingRoom: 101,
      password: "aws123$!"
    }
  ]
).pipe(delay(1000));

@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  private _doctors$ = new BehaviorSubject<Doctor[]>([]);
  private doctors$ = this._doctors$.asObservable();

  constructor() {

  }

  loadUsers(): void {
    USER_DB.subscribe({
      next: (doctorsfromDB) => this._doctors$.next(doctorsfromDB)
    })

  }

  getDoctors(): Observable<Doctor[]> {
    return this.doctors$
  }
  createDoctor(doctor: CreateDoctor): void {
    this.doctors$.pipe(take(1)).subscribe({
      next: (actualArray) => {
        this._doctors$.next([...actualArray, { ...doctor, id_doctor: actualArray.length + 1 }])
      }
    })
  }

  updateDoctorById(id: number, doctorUpdated: UpdateDoctor): void {
    this.doctors$.pipe(take(1)).subscribe({
      next: (actualArray) => {
        this._doctors$.next(
          actualArray.map((doctor) => (doctor.id_doctor === id) ? { ...doctor, ...doctorUpdated } : doctor)
        )
      }
    })
  }

  deleteDoctorById(id: number): void {
    this.doctors$.pipe(take(1)).subscribe({
      next: (actualArray) => {
        this._doctors$.next(actualArray.filter((doctorToDelete) => doctorToDelete.id_doctor !== id))
      }
    })
  }
}
