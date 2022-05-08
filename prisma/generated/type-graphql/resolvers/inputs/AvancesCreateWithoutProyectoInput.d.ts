import { UsuarioCreateNestedOneWithoutAvancesInput } from "../inputs/UsuarioCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateWithoutProyectoInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    creadoPor: UsuarioCreateNestedOneWithoutAvancesInput;
}
