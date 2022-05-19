import { Avances } from "../models/Avances";
import { Inscripcion } from "../models/Inscripcion";
import { ObjetivosEspecificos } from "../models/ObjetivosEspecificos";
import { User } from "../models/User";
import { ProyectoCount } from "../resolvers/outputs/ProyectoCount";
export declare class Proyecto {
    id: string;
    nombre: string;
    presupuesto?: string | null;
    fechaInicio?: Date | null;
    fechaFin?: Date | null;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarrollo" | "Terminado";
    objetivoGeneral?: string | null;
    lider?: User;
    UserId: string;
    avances?: Avances[];
    inscripciones?: Inscripcion[];
    objetivosEspecificos?: ObjetivosEspecificos[];
    _count?: ProyectoCount | null;
}
