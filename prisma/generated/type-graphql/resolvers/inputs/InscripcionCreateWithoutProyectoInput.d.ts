import { UsuarioCreateNestedOneWithoutInscripcionesInput } from "../inputs/UsuarioCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateWithoutProyectoInput {
    id?: string | undefined;
    estado: "Aceptado" | "Rechazado";
    fechaIngreso: Date;
    fechaEgreso: Date;
    estudiante: UsuarioCreateNestedOneWithoutInscripcionesInput;
}
