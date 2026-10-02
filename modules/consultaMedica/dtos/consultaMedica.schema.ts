import {z} from 'zod';

export const consultaMedicaSchema = z.object({
    body: z.object({
            paciente: z.string().length(24, 'ID de Paciente inválido').optional().default("Ninguna"),
            medico: z.string().length(24, 'ID de Médico inválido').optional().default("Ninguna"),
            fecha: z.date(),
            motivoConsulta: z.string().max(200),
            sintomas: z.string().max(200),
            diagnostico: z.string().max(200),
            tratamiento: z.string().max(200),
            observaciones: z.string().max(200),
            activo: z.boolean().default(true)
   })
});
export type IConsultaMedicaDTO = z.infer<typeof consultaMedicaSchema>['body']