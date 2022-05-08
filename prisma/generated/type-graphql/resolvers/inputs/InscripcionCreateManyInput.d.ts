export declare class InscripcionCreateManyInput {
    id?: string | undefined;
    estado: "Aceptado" | "Rechazado";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyectoId: string;
    usuarioId: string;
}
