import { Document} from "mongoose";

export interface IEspecialidad extends Document {
    nombre:String,
    descripcion: String,
    activo:boolean
}