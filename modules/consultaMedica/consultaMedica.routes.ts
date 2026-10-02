import {Router} from "express";
import {getConsultaMedica, createConsultaMedica, deleteConsultaMedica} from "./consultaMedica.controller";

const router = Router();

router.get('/', getConsultaMedica);
router.post('/', createConsultaMedica);
router.delete('/:id', deleteConsultaMedica);

export default router;