import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProyectoUpdateOneRequiredWithoutAvancesInput } from "../inputs/ProyectoUpdateOneRequiredWithoutAvancesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutAvancesInput } from "../inputs/UsuarioUpdateOneRequiredWithoutAvancesInput";
export declare class AvancesUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: NullableStringFieldUpdateOperationsInput | undefined;
    proyecto?: ProyectoUpdateOneRequiredWithoutAvancesInput | undefined;
    creadoPor?: UsuarioUpdateOneRequiredWithoutAvancesInput | undefined;
}
