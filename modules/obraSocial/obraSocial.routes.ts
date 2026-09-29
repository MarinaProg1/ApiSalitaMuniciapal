import { Router } from 'express';
import { createObraSocial, getObraSocial } from './obraSocial.controller';
import { CrearObraSocialSchema } from './dtos/obraSocial.schema';
import { validarSchema } from '../../middlewares/validarDatos.middleware';

const router = Router();

router.get('/', getObraSocial);
router.post('/', validarSchema(CrearObraSocialSchema), createObraSocial);

export default router;