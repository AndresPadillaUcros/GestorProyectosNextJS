import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";
export declare class Inscripcion {
    id: string;
    estado: "Aceptado" | "Rechazado" | "Pendiente";
    fechaIngreso: Date;
    fechaEgreso?: Date | null;
    proyecto?: Proyecto;
    proyectoId: string;
    estudiante?: Usuario;
    usuarioId: string;
}
