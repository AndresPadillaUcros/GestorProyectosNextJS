import { ProyectoCreateNestedOneWithoutInscripcionesInput } from "../inputs/ProyectoCreateNestedOneWithoutInscripcionesInput";
import { UserCreateNestedOneWithoutInscripcionesInput } from "../inputs/UserCreateNestedOneWithoutInscripcionesInput";
export declare class InscripcionCreateInput {
    id?: string | undefined;
    estado?: "Aceptado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
    fechaEgreso?: Date | undefined;
    proyecto: ProyectoCreateNestedOneWithoutInscripcionesInput;
    estudiante: UserCreateNestedOneWithoutInscripcionesInput;
}
