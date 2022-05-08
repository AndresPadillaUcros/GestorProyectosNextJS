import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutAvancesInput } from "../inputs/UsuarioUpdateOneRequiredWithoutAvancesInput";
export declare class AvancesUpdateWithoutProyectoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: StringFieldUpdateOperationsInput | undefined;
    creadoPor?: UsuarioUpdateOneRequiredWithoutAvancesInput | undefined;
}
