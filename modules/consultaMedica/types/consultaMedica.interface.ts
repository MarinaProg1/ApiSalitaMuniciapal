import {Document} from "mongoose";
import type { IMedico } from "../../medico/types/medico.interface";
import type { IPaciente } from "../../pacientes/types/paciente.interface";

export interface IConsultaMedica extends Document {
paciente: IPaciente | string,
medico: IMedico | string,
fecha: Date,
motivoConsulta: string,
sintomas: string,
diagnostico: string,
tratamiento: string,
observaciones: string,
activo: boolean
}
    