import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { InscripcionUpdateManyWithoutProyectoInput } from "../inputs/InscripcionUpdateManyWithoutProyectoInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutProyectosLideradosInput } from "../inputs/UsuarioUpdateOneRequiredWithoutProyectosLideradosInput";
export declare class ProyectoUpdateWithoutAvancesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    presupuesto?: FloatFieldUpdateOperationsInput | undefined;
    fechaInicio?: DateTimeFieldUpdateOperationsInput | undefined;
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    lider?: UsuarioUpdateOneRequiredWithoutProyectosLideradosInput | undefined;
    inscripciones?: InscripcionUpdateManyWithoutProyectoInput | undefined;
}
