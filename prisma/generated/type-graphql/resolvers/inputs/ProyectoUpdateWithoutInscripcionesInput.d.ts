import { AvancesUpdateManyWithoutProyectoInput } from "../inputs/AvancesUpdateManyWithoutProyectoInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_EstadoProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoProyectoFieldUpdateOperationsInput";
import { EnumEnum_FaseProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_FaseProyectoFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { ObjetivosEspecificosUpdateManyWithoutProyectoInput } from "../inputs/ObjetivosEspecificosUpdateManyWithoutProyectoInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsuarioUpdateOneRequiredWithoutProyectosLideradosInput } from "../inputs/UsuarioUpdateOneRequiredWithoutProyectosLideradosInput";
export declare class ProyectoUpdateWithoutInscripcionesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    presupuesto?: StringFieldUpdateOperationsInput | undefined;
    fechaInicio?: DateTimeFieldUpdateOperationsInput | undefined;
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoProyectoFieldUpdateOperationsInput | undefined;
    fase?: EnumEnum_FaseProyectoFieldUpdateOperationsInput | undefined;
    objetivoGeneral?: StringFieldUpdateOperationsInput | undefined;
    lider?: UsuarioUpdateOneRequiredWithoutProyectosLideradosInput | undefined;
    avances?: AvancesUpdateManyWithoutProyectoInput | undefined;
    objetivosEspecificos?: ObjetivosEspecificosUpdateManyWithoutProyectoInput | undefined;
}
