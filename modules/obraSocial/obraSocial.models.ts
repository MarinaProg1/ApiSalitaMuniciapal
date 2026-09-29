import { Document, Schema,model } from "mongoose";
import type { IObraSocial } from "./types/obraSocial.interface";
import { DireccionSchema } from "../../utils/direccion.interfaces";
import { TelefonoSchema } from "../../utils/telefono.interfaces";

const obraSocialShema = new Schema<IObraSocial>({
    razonSocial:{
        type: String,
        required: [true, 'La Razon Social es obligatoria'],
        uppercase: true,
    }, 
    cuit:{
        type:String,
        required:[true, 'El número de cuit es obligatorio']
    }, 
    direccion:{
        type: DireccionSchema,
        required: [true, 'La direccion es obligatoria']
    },
    telefono:{
        type:TelefonoSchema,
    },
    activo: {
        type: Boolean,
        default: true,
        select: false
    }
},
{
        timestamps: true,
});

obraSocialShema.set('toJSON', {
    transform: (documento: Document, obraSocialRetorno: Record<string, any>) => {
        obraSocialRetorno.id = obraSocialRetorno._id;
        delete obraSocialRetorno._id;
        delete obraSocialRetorno.__v;
    }
});

const ObraSocialModel = model<IObraSocial>('ObraSocial', obraSocialShema);

export default ObraSocialModel;
