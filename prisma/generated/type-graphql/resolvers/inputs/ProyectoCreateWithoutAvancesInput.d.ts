import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { ObjetivosEspecificosCreateNestedManyWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutAvancesInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: string;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "Desarollo" | "Terminado" | undefined;
    objetivoGeneral: string;
    lider: UsuarioCreateNestedOneWithoutProyectosLideradosInput;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
    objetivosEspecificos?: ObjetivosEspecificosCreateNestedManyWithoutProyectoInput | undefined;
}
