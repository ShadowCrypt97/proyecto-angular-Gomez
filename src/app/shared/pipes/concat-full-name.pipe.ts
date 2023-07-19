import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from 'src/app/dashboard/pages/doctores/models/doctor.model';

@Pipe({
  name: 'ConcatFullNamePipe'
})
export class ConcatFullNamePipe implements PipeTransform {

  transform(doctor: Doctor, ...args: unknown[]): unknown {
    const isUppercase = args[0] === 'uppercase';
    const fullName = `${doctor.name} ${doctor.surname}`;
    return isUppercase ? fullName.toUpperCase() : fullName;
  }

}
