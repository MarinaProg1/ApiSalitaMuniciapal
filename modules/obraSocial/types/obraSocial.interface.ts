import { Document, Types } from "mongoose";
import type {IDireccion} from "../../../utils/direccion.interfaces";
import type {ITelefono } from "../../../utils/telefono.interfaces";


export interface IObraSocial extends Document{
    id?: Types.ObjectId,
    razonSocial: string,
    cuit:string,
    direccion: IDireccion,
    telefono:ITelefono,
    activo: boolean
}
