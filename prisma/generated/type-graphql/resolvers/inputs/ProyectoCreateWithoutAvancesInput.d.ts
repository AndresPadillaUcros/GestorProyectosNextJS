import { InscripcionCreateNestedManyWithoutProyectoInput } from "../inputs/InscripcionCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutAvancesInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    lider: UsuarioCreateNestedOneWithoutProyectosLideradosInput;
    inscripciones?: InscripcionCreateNestedManyWithoutProyectoInput | undefined;
}
