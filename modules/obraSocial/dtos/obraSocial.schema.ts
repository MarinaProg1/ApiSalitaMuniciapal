import {z} from 'zod';
import {DireccionZodSchema} from '../../../utils/direccion.interfaces';
import { TelefonoZodSchema } from '../../../utils/telefono.interfaces';

export const CrearObraSocialSchema = z.object({
    body: z.object({
         razonSocial: z.string(),
         cuit:z.string(),
         direccion:DireccionZodSchema,
         telefono:TelefonoZodSchema,
         activo: z.boolean()
    })

})
export type ICrearObraSocialDTO = z.infer<typeof CrearObraSocialSchema>['body']