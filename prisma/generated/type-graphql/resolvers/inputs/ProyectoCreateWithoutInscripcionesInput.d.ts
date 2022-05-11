import { AvancesCreateNestedManyWithoutProyectoInput } from "../inputs/AvancesCreateNestedManyWithoutProyectoInput";
import { UsuarioCreateNestedOneWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateNestedOneWithoutProyectosLideradosInput";
export declare class ProyectoCreateWithoutInscripcionesInput {
    id?: string | undefined;
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin?: Date | undefined;
    estado: "Activo" | "Inactivo";
    fase: "Iniciado" | "Desarollo" | "Terminado";
    objetivoGeneral?: string | undefined;
    lider: UsuarioCreateNestedOneWithoutProyectosLideradosInput;
    avances?: AvancesCreateNestedManyWithoutProyectoInput | undefined;
}
