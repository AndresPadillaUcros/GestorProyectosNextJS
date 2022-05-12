import { AvancesCreateNestedManyWithoutProyectoInput } from "../inputs/AvancesCreateNestedManyWithoutProyectoInput";
import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutObjetivosEspecificosInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: string;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "Desarollo" | "Terminado" | undefined;
    objetivoGeneral: string;
    lider: UsuarioCreateNestedOneWithoutProyectosLideradosInput;
    avances?: AvancesCreateNestedManyWithoutProyectoInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
