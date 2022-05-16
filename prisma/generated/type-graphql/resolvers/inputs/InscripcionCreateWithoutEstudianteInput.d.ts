import { ProyectoCreateNestedOneWithoutInscripcionesInput } from "../inputs/ProyectoCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateWithoutEstudianteInput {
    id?: string | undefined;
    estado?: "Aceptado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
    fechaEgreso?: Date | undefined;
    proyecto: ProyectoCreateNestedOneWithoutInscripcionesInput;
}
