import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateWithoutCreadoPorInput {
    id?: string | undefined;
    fecha?: Date | undefined;
    descripcion: string;
    observaciones?: string | undefined;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
}
