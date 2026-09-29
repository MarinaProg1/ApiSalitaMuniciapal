import type { Request, Response } from 'express';
import ObraSocial from './obraSocial.models';
import { respuestaEstandar } from '../../utils/respuestaEstandar';
import type { ICrearObraSocialDTO } from './dtos/obraSocial.schema';

const getObraSocial  = async (req: Request<unknown, unknown, unknown, ICrearObraSocialDTO >, res: Response) => {
    try {
        const { razonSocial, cuit } = req.query;
        const filtro: Record<string, string> = {};

        if (razonSocial) filtro.razonSocail = razonSocial.toUpperCase();

        if (cuit) filtro.cuit = cuit;

        const ObrasSociales = await ObraSocial.find(filtro);

        return respuestaEstandar(res, 200, true, 'Obras Sociales obtenidas exitosamente', ObrasSociales);
    } catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al obtener obra Social', error.message);
    }
};

const createObraSocial = async (req: Request<unknown, unknown, ICrearObraSocialDTO>, res: Response) => {
    try {
        const nuevaObraSocial = await ObraSocial.create(req.body);

        return respuestaEstandar(res, 201, true, 'Obra social creada exitosamente', nuevaObraSocial);
    } catch (error: any) {
        return respuestaEstandar(res, 500, false, 'Error al crear la obra social', error.message);
    }
};

export { getObraSocial, createObraSocial};