import { Proyecto } from "../models/Proyecto";
import { User } from "../models/User";
export declare class Inscripcion {
    id: string;
    estado: "Aceptado" | "Rechazado" | "Pendiente";
    fechaIngreso: Date;
    fechaEgreso?: Date | null;
    proyecto?: Proyecto;
    proyectoId: string;
    estudiante?: User;
    UserId: string;
}
