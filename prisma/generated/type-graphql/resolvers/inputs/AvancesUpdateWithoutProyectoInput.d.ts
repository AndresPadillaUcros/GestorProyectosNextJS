import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAvancesInput } from "../inputs/UserUpdateOneRequiredWithoutAvancesInput";
export declare class AvancesUpdateWithoutProyectoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: NullableStringFieldUpdateOperationsInput | undefined;
    creadoPor?: UserUpdateOneRequiredWithoutAvancesInput | undefined;
}
