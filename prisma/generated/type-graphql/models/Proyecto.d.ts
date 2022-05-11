import { Avances } from "../models/Avances";
import { Inscripcion } from "../models/Inscripcion";
import { Usuario } from "../models/Usuario";
import { ProyectoCount } from "../resolvers/outputs/ProyectoCount";
export declare class Proyecto {
    id: string;
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin?: Date | null;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarollo" | "Terminado";
    objetivoGeneral?: string | null;
    objetivosEspecificos: string[];
    lider?: Usuario;
    usuarioId: string;
    avances?: Avances[];
    inscripciones?: Inscripcion[];
    _count?: ProyectoCount | null;
}
