import { UserCreateNestedOneWithoutInscripcionesInput } from "../inputs/UserCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateWithoutProyectoInput {
    id?: string | undefined;
    estado?: "Aceptado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
    fechaEgreso?: Date | undefined;
    estudiante: UserCreateNestedOneWithoutInscripcionesInput;
}
