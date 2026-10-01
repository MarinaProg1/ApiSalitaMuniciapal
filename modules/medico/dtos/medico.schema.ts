import {z} from 'zod';
import {Types} from 'mongoose';
import {DireccionZodSchema} from '../../../utils/direccion.interfaces';
import { TelefonoZodSchema } from '../../../utils/telefono.interfaces';

// Validador que verifica que sea un ObjectId válido de Mongoose
const objectIdSchema = z.string().refine(
  (val) => Types.ObjectId.isValid(val),
  { message: "El ID de la especialidad no tiene un formato ObjectId válido" }
);

export const MedicoSchema = z.object({
    body: z.object({
        nombre:z.string(),
        apellido:z.string(),
        dni:z.string(),
        email:z.string(),
        especialidades: z.array(objectIdSchema).min(1, "Debe incluir al menos una especialidad"),
        numeroMatricula:z.number(),
        direccion:DireccionZodSchema,
        telefono:TelefonoZodSchema,
        obraSocial: z.string().length(24, 'ID de Obra Social inválido').optional().default("Ninguna"),
        activo:z.boolean(),

    })
})
export type IMedicoDTO = z.infer<typeof MedicoSchema>['body']