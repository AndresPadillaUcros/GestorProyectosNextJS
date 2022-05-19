import { AvancesCreateNestedManyWithoutProyectoInput } from "../inputs/AvancesCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { UserCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UserCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutObjetivosEspecificosInput {
    id?: string | undefined;
    nombre: string;
    presupuesto?: string | undefined;
    fechaInicio?: Date | undefined;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "Desarrollo" | "Terminado" | undefined;
    objetivoGeneral?: string | undefined;
    lider: UserCreateNestedOneWithoutProyectosLideradosInput;
    avances?: AvancesCreateNestedManyWithoutProyectoInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
