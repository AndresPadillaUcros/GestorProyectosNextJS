export declare class ProyectoCreateManyInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: string;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "Desarollo" | "Terminado" | undefined;
    objetivoGeneral: string;
    usuarioId: string;
}
