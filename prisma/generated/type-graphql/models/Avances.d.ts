import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";
export declare class Avances {
    id: string;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    proyecto?: Proyecto;
    proyectoId: string;
    creadoPor?: Usuario;
    usuarioId: string;
}
