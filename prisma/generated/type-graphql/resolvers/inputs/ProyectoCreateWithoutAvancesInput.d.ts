import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { ObjetivosEspecificosCreateNestedManyWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateNestedManyWithoutProyectoInput";
import { UserCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UserCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutAvancesInput {
    id?: string | undefined;
    nombre: string;
    presupuesto?: string | undefined;
    fechaInicio?: Date | undefined;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "Desarrollo" | "Terminado" | undefined;
    objetivoGeneral?: string | undefined;
    lider: UserCreateNestedOneWithoutProyectosLideradosInput;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
    objetivosEspecificos?: ObjetivosEspecificosCreateNestedManyWithoutProyectoInput | undefined;
}
