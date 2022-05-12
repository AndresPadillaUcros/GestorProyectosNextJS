import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_EstadoProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoProyectoFieldUpdateOperationsInput";
import { EnumEnum_FaseProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_FaseProyectoFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProyectoUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    presupuesto?: StringFieldUpdateOperationsInput | undefined;
    fechaInicio?: DateTimeFieldUpdateOperationsInput | undefined;
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoProyectoFieldUpdateOperationsInput | undefined;
    fase?: EnumEnum_FaseProyectoFieldUpdateOperationsInput | undefined;
    objetivoGeneral?: StringFieldUpdateOperationsInput | undefined;
}
