import { Document, Schema, model } from "mongoose";
import type {IMedico} from './types/medico.interface';
import { DireccionSchema } from "../../utils/direccion.interfaces";
import { TelefonoSchema } from "../../utils/telefono.interfaces";


const medicoSchema = new Schema<IMedico>({
        nombre:{
            type:String,
            required: [true, 'El nombre es obligatorio'],
            uppercase: true,
        },
        apellido:{
            type:String,
            required: [true, 'El nombre es obligatorio'],
            uppercase: true,
        },
        dni:{
            type: String,
            required: [true, 'El DNI del paciente es obligatorio'],
            unique: [true, 'El DNI del paciente debe ser único'],
            match: [/^[0-9]{7,8}$/, 'El DNI debe tener 8 dígitos'],
        },
        email:{
            type: String,
            required: [true, 'El correo electrónico del paciente es obligatorio'],
            unique: [true, 'El correo electrónico del paciente debe ser único'],
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'El correo electrónico no es válido']

        },
       especialidades: [{
        type: Schema.Types.ObjectId,
        ref: 'especialidad'
      }],
        numeroMatricula:{
            type:Number,
            required: [true, 'El numero de matricula es obligatorio'],
        },
          direccion: {
        type: DireccionSchema
    },
    telefono:{
        type: TelefonoSchema
    },
        obraSocial:{
            type: Schema.Types.ObjectId,
            ref: 'obraSocial'
        },
        activo: {
            type: Boolean,
            default: true,
            select: false
    }
},
{
        timestamps: true,
});

medicoSchema.set('toJSON', {
    transform: (documento: Document, medicoRetorno: Record<string, any>) => {
        medicoRetorno.id = medicoRetorno._id;
        delete medicoRetorno._id;
        delete medicoRetorno.__v;
    }
});
const MedicoModel = model<IMedico>('Medico', medicoSchema);

export default MedicoModel;