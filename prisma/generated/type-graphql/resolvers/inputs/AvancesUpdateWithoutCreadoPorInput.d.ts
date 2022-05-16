import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutAvancesInput } from "../inputs/ProyectoUpdateOneRequiredWithoutAvancesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AvancesUpdateWithoutCreadoPorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: NullableStringFieldUpdateOperationsInput | undefined;
    proyecto?: ProyectoUpdateOneRequiredWithoutAvancesInput | undefined;
}
