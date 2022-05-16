import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
import { UsuarioCreateNestedOneWithoutAvancesInput } from "../inputs/UsuarioCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateInput {
    id?: string | undefined;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones?: string | undefined;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
    creadoPor: UsuarioCreateNestedOneWithoutAvancesInput;
}
