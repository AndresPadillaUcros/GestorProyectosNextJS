import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { ProyectoCreateobjetivosEspecificosInput } from "../inputs/ProyectoCreateobjetivosEspecificosInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutAvancesInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarollo" | "Terminado";
    objetivoGeneral?: string | undefined;
    objetivosEspecificos?: ProyectoCreateobjetivosEspecificosInput | undefined;
    lider: UsuarioCreateNestedOneWithoutProyectosLideradosInput;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
