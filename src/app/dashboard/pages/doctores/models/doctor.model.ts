export interface Doctor {
    id_doctor: number;
    name: string,
    surname: string,
    speciality: string,
    consultingRoom: number,
    password: string,
    email?: string,
}

export interface CreateDoctor {
    name: string,
    surname: string,
    speciality: string,
    consultingRoom: number,
    password: string,
    email?: string,
}

export interface UpdateDoctor {
    name?: string,
    surname?: string,
    speciality?: string,
    consultingRoom?: number,
    password?: string,
    email?: string,
}