import { Avances } from "../models/Avances";
import { Inscripcion } from "../models/Inscripcion";
import { Proyecto } from "../models/Proyecto";
import { UsuarioCount } from "../resolvers/outputs/UsuarioCount";
export declare class Usuario {
    id: string;
    email: string;
    nombre: string;
    apellido: string;
    identificacion: string;
    rol: "Estudiante" | "Lider" | "Administrador";
    estado: "Pendiente" | "Autorizado" | "NoAutorizado";
    proyectosLiderados?: Proyecto[];
    avances?: Avances[];
    inscripciones?: Inscripcion[];
    _count?: UsuarioCount | null;
}
