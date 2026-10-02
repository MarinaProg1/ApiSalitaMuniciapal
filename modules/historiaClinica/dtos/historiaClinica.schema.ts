import {z} from 'zod';
import { ActividadFisica } from '../emun/actividadFisica.emun';


export const crearHistoriaClinicaSchema = z.object({ 
   body: z.object({
            paciente:z.string().length(24, 'ID de Paciente inválido').optional().default("Ninguna"),
            antecedentes:z.object({
                    alergias:z.string().array().optional().default([]),
                    enfermedadesCronicas:z.string().array().optional().default([]), 
                    medicamentosHabituales:z.string().array().optional().default([]), 
                    cirugiasPrevias:z.string().array().optional().default([]), 
                    internacionesPrevias:z.string().array().optional().default([]), 
                    antecedentesFamiliares:z.string().array().optional().default([]), 
                    vacunas:z.string().array().optional().default([]), 
                    habitos: z.object({
                        tabaquismo: z.boolean(),
                        alcohol: z.boolean(),
                        actividadFisica: z.enum(ActividadFisica),
                    }),
            otros:z.string().array().optional().default([]),
            activo:z.boolean(),
    })   

}),
})   
export type IHistoriaClinicaDTO = z.infer<typeof crearHistoriaClinicaSchema>['body']