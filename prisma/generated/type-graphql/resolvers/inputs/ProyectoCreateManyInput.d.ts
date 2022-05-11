export declare class ProyectoCreateManyInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarollo" | "Terminado";
    usuarioId: string;
}
