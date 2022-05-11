import { ProyectoCreateNestedOneWithoutObjetivosEspecificosInput } from "../inputs/ProyectoCreateNestedOneWithoutObjetivosEspecificosInput";
export declare class ObjetivosEspecificosCreateInput {
    id?: string | undefined;
    descripcion: string;
    proyecto: ProyectoCreateNestedOneWithoutObjetivosEspecificosInput;
}
