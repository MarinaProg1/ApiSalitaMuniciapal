import {Document, Schema, model} from 'mongoose';
import type { IConsultaMedica } from './types/consultaMedica.interface';

const consultaMedicaSchema = new Schema<IConsultaMedica>({
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente',
        required: [true, 'El paciente es obligatorio'],
        uppercase: true,
    },
    medico: {
        type: Schema.Types.ObjectId,
        ref: 'Medico',
        required: [true, 'El medico es obligatorio'],
        uppercase: true,
    },
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria'],
    },
    motivoConsulta: {
        type: String,   
        required: [true, 'El motivo de la consulta es obligatorio'],
        uppercase: true,
    },
    sintomas: {
        type: String,
        required: [true, 'Los síntomas son obligatorios'],
        uppercase: true,
    },
    diagnostico: {
        type: String,   
        required: [true, 'El diagnóstico es obligatorio'],
        uppercase: true,
    },
    tratamiento: {
        type: String,
        required: [true, 'El tratamiento es obligatorio'],
        uppercase: true,
    },
    observaciones: {
        type: String,
        required: [true, 'Las observaciones son obligatorias'],
        uppercase: true,
    },
    activo: {
        type: Boolean,  
        default: true,
    },
},
{
        timestamps: true,
});

consultaMedicaSchema.set('toJSON', {
    transform: (documento: Document, consultaMedicaRetorno: Record<string, any>) => {
        consultaMedicaRetorno.id = consultaMedicaRetorno._id;
        delete consultaMedicaRetorno._id;
        delete consultaMedicaRetorno.__v;
    }
});
const ConsultaMedicaModel = model<IConsultaMedica>('ConsultaMedica', consultaMedicaSchema);

export default ConsultaMedicaModel; 