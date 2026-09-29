import type { Response, Request } from "express";
import Medico from './medico.models';
import { respuestaEstandar } from '../../utils/respuestaEstandar';
import type { IMedicoDTO } from './dtos/medico.schema';

const getMedico  = async (req: Request<unknown, unknown, unknown, IMedicoDTO >, res: Response) => {
    try {
        const { nombre} = req.query;
        const filtro: Record<string, string> = {};

        if (nombre) filtro.nombre = nombre.toUpperCase();

        const Medicos = await Medico.find(filtro);

        return respuestaEstandar(res, 200, true, 'Medico obtenidos exitosamente', Medicos);
    } catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al obtener Medicos', error.message);
    }
};
const createMedico = async (req: Request<unknown, unknown, IMedicoDTO>, res: Response) => {
    try {
        const nuevoMedico = await Medico.create(req.body);

        return respuestaEstandar(res, 201, true, 'Medico creado exitosamente', nuevoMedico);
    } catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al crear el medico', error.message);
    }
};

const deleteMedico = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const medicoBorrado = await Medico.findByIdAndDelete(req.params.id);

        if (!medicoBorrado) {
            return respuestaEstandar(res, 404, false, 'Medico no encontrado');
        }

        return respuestaEstandar(res, 200, true, 'Medico eliminado correctamente', medicoBorrado);
    } catch (error: any) {
        return respuestaEstandar(res, 400, false, 'Error al eliminar el medico', error.message);
    }
};

export { getMedico, createMedico, deleteMedico };

