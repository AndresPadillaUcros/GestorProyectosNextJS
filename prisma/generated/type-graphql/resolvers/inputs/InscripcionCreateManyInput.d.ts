export declare class InscripcionCreateManyInput {
    id?: string | undefined;
    estado?: "Aceptado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
    fechaEgreso?: Date | undefined;
    proyectoId: string;
    usuarioId: string;
}
