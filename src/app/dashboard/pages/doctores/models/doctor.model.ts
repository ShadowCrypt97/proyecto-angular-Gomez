export interface Doctor {
    id_doctor: number;
    name: string,
    surname: string,
    speciality: string,
    consultingRoom: number,
    password: string,
    email?: string,
}