import { ProyectoCreateNestedOneWithoutAvancesInput } from "../inputs/ProyectoCreateNestedOneWithoutAvancesInput";
export declare class AvancesCreateWithoutCreadoPorInput {
    id?: string | undefined;
    fecha: Date;
    descripcion: string;
    observaciones: string;
    proyecto: ProyectoCreateNestedOneWithoutAvancesInput;
}
