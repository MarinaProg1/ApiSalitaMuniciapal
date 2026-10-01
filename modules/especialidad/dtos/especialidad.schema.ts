import {z} from 'zod';

export const crearEspecialidadSchema = z.object({
    body: z.object({
        nombre:z.string(),
        descripcion: z.string().optional().default(""),
        activo:z.boolean().optional().default(true)
    })
})
export type ICrearEspecialidadDTO = z.infer<typeof crearEspecialidadSchema>['body']