import { UserCreateNestedOneWithoutAvancesInput } from "../inputs/UserCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateWithoutProyectoInput {
    id?: string | undefined;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones?: string | undefined;
    creadoPor: UserCreateNestedOneWithoutAvancesInput;
}
