import { Proyecto } from "../models/Proyecto";
import { Usuario } from "../models/Usuario";
export declare class Inscripcion {
    id: string;
    estado: "Aceptado" | "Rechazado";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto?: Proyecto;
    proyectoId: string;
    estudiante?: Usuario;
    usuarioId: string;
}
