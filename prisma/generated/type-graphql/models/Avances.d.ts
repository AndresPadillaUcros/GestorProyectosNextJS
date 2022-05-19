import { Proyecto } from "../models/Proyecto";
import { User } from "../models/User";
export declare class Avances {
    id: string;
    fecha: Date;
    descripcion: string;
    observaciones?: string | null;
    proyecto?: Proyecto;
    proyectoId: string;
    creadoPor?: User;
    UserId: string;
}
