import { Document, Types } from "mongoose";
import type {ActividadFisica} from "../emun/actividadFisica.emun";

export interface IHistoriaClinica extends Document{
    paciente:Types.ObjectId | string,
    antecedentes: {
        alergias?:String[],
        enfermedadesCronicas?: String[], 
        medicamentosHabituales?:String[], 
        cirugiasPrevias?: String [], 
        internacionesPrevias?: String[], 
        antecedentesFamiliares?:String[], 
        vacunas?:String[], 
        habitos: { 
            tabaquismo:Boolean, 
            alcohol:Boolean,
            actividadFisica: ActividadFisica,
        }
        otros?:String[],
        activo:Boolean,
    }

}