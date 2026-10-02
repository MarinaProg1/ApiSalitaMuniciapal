import type {Request, Response} from 'express';
import consultaMedica from './consultaMedica.models';
import {respuestaEstandar} from '../../utils/respuestaEstandar';

const getConsultaMedica = async (req: Request, res: Response) => {
    try {
        const { paciente, medico } = req.query;
        const filtro: Record<string, string> = {};

        if (paciente) filtro.paciente = paciente as string;
        if (medico) filtro.medico = medico as string;   
        
        const consultasMedicas = await consultaMedica.find(filtro);

        return respuestaEstandar(res, 200, true, 'Consultas médicas obtenidas exitosamente', consultasMedicas);
    } catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al obtener las consultas médicas', error.message);
    }
};

const createConsultaMedica = async (req: Request, res: Response) => {
    try {
        const nuevaConsultaMedica = await consultaMedica.create(req.body);  

        return respuestaEstandar(res, 201, true, 'Consulta médica creada exitosamente', nuevaConsultaMedica);
    } catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al crear la consulta médica', error.message);
    }
};

const deleteConsultaMedica = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const consultaMedicaBorrada = await consultaMedica.findByIdAndDelete(req.params.id);

        if (!consultaMedicaBorrada) {
            return respuestaEstandar(res, 404, false, 'Consulta médica no encontrada');
        }
        
        return respuestaEstandar(res, 200, true, 'Consulta médica eliminada correctamente', consultaMedicaBorrada);
    } catch (error: any) {
        return respuestaEstandar(res, 400, false, 'Error al eliminar la consulta médica', error.message);
    }
};

export { getConsultaMedica, createConsultaMedica, deleteConsultaMedica };