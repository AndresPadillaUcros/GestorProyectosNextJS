import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_EstadoInscripcionFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoInscripcionFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutInscripcionesInput } from "../inputs/UsuarioUpdateOneRequiredWithoutInscripcionesInput";
export declare class InscripcionUpdateWithoutProyectoInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoInscripcionFieldUpdateOperationsInput | undefined;
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | undefined;
    fechaEgreso?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    estudiante?: UsuarioUpdateOneRequiredWithoutInscripcionesInput | undefined;
}
