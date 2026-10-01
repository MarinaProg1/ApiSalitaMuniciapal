import  { Document,Schema, model } from "mongoose";
import type { IEspecialidad } from "./types/especialidad.interface";


const EspecialidadSchema = new Schema<IEspecialidad>({
    nombre:{
        type: String,
        required: [true , 'El nombre es obligatorio'],
        uppercase: true
    },
    descripcion:{
        type: String,
    }, 
    activo: {
        type: Boolean,
        default: true,
        select: false
    }
},  
    {
        timestamps: true,
})

EspecialidadSchema.set('toJSON', {
    transform: (documento: Document, especialidadRetorno: Record<string, any>) => {
        especialidadRetorno.id = especialidadRetorno._id;
        delete especialidadRetorno._id;
        delete especialidadRetorno.__v;
    }
});
const EspecialidadModel = model<IEspecialidad>('Especialidad', EspecialidadSchema);

export default EspecialidadModel;