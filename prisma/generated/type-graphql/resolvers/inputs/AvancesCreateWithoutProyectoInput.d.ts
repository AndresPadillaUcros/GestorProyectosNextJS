import { UsuarioCreateNestedOneWithoutAvancesInput } from "../inputs/UsuarioCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateWithoutProyectoInput {
    id?: string | undefined;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones?: string | undefined;
    creadoPor: UsuarioCreateNestedOneWithoutAvancesInput;
}
