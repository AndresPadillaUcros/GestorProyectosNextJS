import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
import { UserCreateNestedOneWithoutAvancesInput } from "../inputs/UserCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateInput {
    id?: string | undefined;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones?: string | undefined;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
    creadoPor: UserCreateNestedOneWithoutAvancesInput;
}
