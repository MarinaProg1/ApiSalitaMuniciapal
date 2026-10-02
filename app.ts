import type { Application } from 'express';

import * as dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import express from 'express';
import { connectDB } from './config/database';

import auditMiddleware from './middlewares/auditoria.middleware';
import errorHandlerMiddleware from './middlewares/errorHandler.middleware';

import obraSocialRoutes from './modules/obraSocial/obraSocial.routes';
import pacienteRoutes from './modules/pacientes/paciente.routes';
import medicoRoutes from './modules/medico/medico.routes';
import especilidadRoutes from './modules/especialidad/especialidad.routes';
import historiaClinicaRoutes from './modules/historiaClinica/historiaClinica.routes';


const app: Application = express();

connectDB();

app.use(express.json());
app.use(auditMiddleware);
app.use(cors());

app.use('/api/v1/obraSocial', obraSocialRoutes);
app.use('/api/v1/pacientes', pacienteRoutes);
app.use('/api/v1/medicos', medicoRoutes);
app.use('/api/v1/especialidades', especilidadRoutes);
app.use('/api/v1/historiaClinica', historiaClinicaRoutes);

app.use(errorHandlerMiddleware);

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`============SERVIDOR MUNICIPAL ACTIVO==========`);
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
    console.log(`Entorno: ${process.env.ENTORNO || 'Local'} `);
    console.log(`===============================================`);
});