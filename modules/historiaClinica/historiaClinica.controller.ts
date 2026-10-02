import type {Request, Response} from 'express';
import HistoriaClinica from './historiaClinica.models';
import {respuestaEstandar} from '../../utils/respuestaEstandar';
import type { IHistoriaClinica } from './types/historiaClinica.interface';


const getHistoriaClinica = async (req: Request<unknown, unknown, IHistoriaClinica>, res: Response) => {

    try{
        const idPaciente = req.query.idPaciente as string;
        const filter: Record<string, string> = {};

           if (idPaciente) {
            filter.paciente = idPaciente;
        }
        
        const historiasClinicas = await HistoriaClinica.find(filter).populate('paciente'); 
       

        return respuestaEstandar(res, 200, true, 'Historia clinica obtenida exitosamente', historiasClinicas);

    }catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al obtener la historia clinica', error.message);
    }
}
const createHistoriaClinica = async (req: Request<unknown, unknown, IHistoriaClinica>, res: Response) => {

    try{
       const { paciente } = req.body;
       const historiaExistente = await HistoriaClinica.findOne({ paciente });

       if (historiaExistente) {
            return respuestaEstandar(res, 400, false, 'El paciente ya posee una historia clínica registrada');
        }

        const nuevaHistoriaClinica = new HistoriaClinica(req.body);
        await nuevaHistoriaClinica.save();

        return respuestaEstandar(res, 201, true, 'Historia clínica creada exitosamente', nuevaHistoriaClinica);
    }catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al crear la historia clinica', error.message);
    }
};
const deleteHistoriaClinica = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const historiaBorrada = await HistoriaClinica.findByIdAndDelete(req.params.id);

        if (!historiaBorrada) {
            return respuestaEstandar(res, 404, false, 'Historia clínica no encontrada');
        }

        return respuestaEstandar(res, 200, true, 'Historia clínica eliminada correctamente', historiaBorrada);
    } catch (error: any) {
        return respuestaEstandar(res, 400, false, 'Error al eliminar la historia clínica', error.message);
    }
};
export { getHistoriaClinica, createHistoriaClinica, deleteHistoriaClinica };    