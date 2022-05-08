import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
import { UsuarioCreateNestedOneWithoutAvancesInput } from "../inputs/UsuarioCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
    creadoPor: UsuarioCreateNestedOneWithoutAvancesInput;
}
