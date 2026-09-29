import { Document, Types } from "mongoose";
import type {IDireccion} from "../../../utils/direccion.interfaces";
import type {ITelefono } from "../../../utils/telefono.interfaces";
import type {IObraSocial} from '../../obraSocial/types/obraSocial.interface';


export interface IMedico extends Document{
    nombre:string,
    apellido:string,
    dni:string,
    email:string,
    especialidades: string[], // cambiar cuado haga especialidad
    numeroMatricula:number,
    direccion:IDireccion,
    teléfono:ITelefono,
    obraSocial?: Types.ObjectId | string | IObraSocial;
    activo:boolean
}
