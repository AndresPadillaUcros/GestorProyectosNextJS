import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class AvancesUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    fecha?: DateTimeFieldUpdateOperationsInput | undefined;
    descripcion?: StringFieldUpdateOperationsInput | undefined;
    observaciones?: StringFieldUpdateOperationsInput | undefined;
}
