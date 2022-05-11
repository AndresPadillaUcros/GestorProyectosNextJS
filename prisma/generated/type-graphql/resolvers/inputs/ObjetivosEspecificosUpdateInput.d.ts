import { ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput } from "../inputs/ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ObjetivosEspecificosUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    proyecto?: ProyectoUpdateOneRequiredWithoutObjetivosEspecificosInput | undefined;
}
