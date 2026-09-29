import {z} from 'zod';
import {DireccionZodSchema} from '../../../utils/direccion.interfaces';
import { TelefonoZodSchema } from '../../../utils/telefono.interfaces';

export const MedicoSchema = z.object({
    body: z.object({
        nombre:z.string(),
        apellido:z.string(),
        dni:z.string(),
        email:z.string(),
        especialidades: z.array(z.string()).min(1, 'Debe ingresar al menos una especialidad'),
        numeroMatricula:z.number(),
        direccion:DireccionZodSchema,
        telefono:TelefonoZodSchema,
        obraSocial: z.string().length(24, 'ID de Obra Social inválido').optional().default("Ninguna"),
        activo:z.boolean(),

    })
})
export type IMedicoDTO = z.infer<typeof MedicoSchema>['body']