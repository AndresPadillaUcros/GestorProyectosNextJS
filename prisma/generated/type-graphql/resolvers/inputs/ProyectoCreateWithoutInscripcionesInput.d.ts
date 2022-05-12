import { AvancesCreateNestedManyWithoutProyectoInput } from "../inputs/AvancesCreateNestedManyWithoutProyectoInput";
import { ObjetivosEspecificosCreateNestedManyWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutInscripcionesInput {
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
    objetivosEspecificos?: ObjetivosEspecificosCreateNestedManyWithoutProyectoInput | undefined;
}
