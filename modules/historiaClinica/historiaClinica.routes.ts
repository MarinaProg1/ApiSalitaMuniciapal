import {Router} from "express";
import { getHistoriaClinica, createHistoriaClinica, deleteHistoriaClinica } from "./historiaClinica.controller";
import { crearHistoriaClinicaSchema } from './dtos/historiaClinica.schema';
import { validarSchema } from '../../middlewares/validarDatos.middleware';

const router = Router();

router.get('/', getHistoriaClinica);
router.post('/', validarSchema(crearHistoriaClinicaSchema), createHistoriaClinica);
router.delete('/:id', deleteHistoriaClinica);


export default router;