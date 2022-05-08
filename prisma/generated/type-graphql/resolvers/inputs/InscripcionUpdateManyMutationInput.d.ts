import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_EstadoInscripcionFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoInscripcionFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InscripcionUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoInscripcionFieldUpdateOperationsInput | undefined;
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | undefined;
    fechaEgreso?: DateTimeFieldUpdateOperationsInput | undefined;
}
