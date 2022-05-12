import { Avances } from "../models/Avances";
import { Inscripcion } from "../models/Inscripcion";
import { ObjetivosEspecificos } from "../models/ObjetivosEspecificos";
import { Usuario } from "../models/Usuario";
import { ProyectoCount } from "../resolvers/outputs/ProyectoCount";
export declare class Proyecto {
    id: string;
    nombre: string;
    presupuesto: string;
    fechaInicio: Date;
    fechaFin?: Date | null;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarollo" | "Terminado";
    objetivoGeneral: string;
    lider?: Usuario;
    usuarioId: string;
    avances?: Avances[];
    inscripciones?: Inscripcion[];
    objetivosEspecificos?: ObjetivosEspecificos[];
    _count?: ProyectoCount | null;
}
