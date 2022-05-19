export declare class ProyectoCreateManyInput {
    id?: string | undefined;
    nombre: string;
    presupuesto?: string | undefined;
    fechaInicio?: Date | undefined;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "Desarrollo" | "Terminado" | undefined;
    objetivoGeneral?: string | undefined;
    UserId: string;
}
