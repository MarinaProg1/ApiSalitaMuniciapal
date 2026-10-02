import {Document, Schema, model} from 'mongoose';
import type { IHistoriaClinica } from './types/historiaClinica.interface';
import { ActividadFisica } from './emun/actividadFisica.emun';

const historiaClinicaSchema = new Schema<IHistoriaClinica>({
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente',
        required: [true, 'El paciente es obligatorio'],
        uppercase: true,
    },
    antecedentes: {
        alergias: {
            type: [String], 

        },
        enfermedadesCronicas:{
            type: [String],
        }, 
        medicamentosHabituales:{
            type: [String],
        }, 
        cirugiasPrevias:{
            type: [String],
        }, 
        internacionesPrevias: {
            type: [String],
        },
        antecedentesFamiliares:{
            type: [String],
        }, 
        vacunas:{
            type: [String],
        }, 
        habitos: { 
            tabaquismo:Boolean, 
            alcohol:Boolean,
            actividadFisica: {
                             type: String,
                             enum: Object.values(ActividadFisica),
                             required: false
                             }
     },
        otros:{
            type: [String],
        },
        activo:Boolean,
    }   

},
{
        timestamps: true,
});

historiaClinicaSchema.set('toJSON', {
    transform: (documento: Document, historiaClinicaRetorno: Record<string, any>) => {
        historiaClinicaRetorno.id = historiaClinicaRetorno._id;
        delete historiaClinicaRetorno._id;
        delete historiaClinicaRetorno.__v;
    }
});
const HistoriaClinicaModel = model<IHistoriaClinica>('HistoriaClinica', historiaClinicaSchema);

export default HistoriaClinicaModel; 
