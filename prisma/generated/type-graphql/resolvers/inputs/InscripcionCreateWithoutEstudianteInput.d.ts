import { ProyectoCreateNestedOneWithoutInscripcionesInput } from "../inputs/ProyectoCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateWithoutEstudianteInput {
    id?: string | undefined;
    estado: "Aceptado" | "Rechazado";
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto: ProyectoCreateNestedOneWithoutInscripcionesInput;
}
