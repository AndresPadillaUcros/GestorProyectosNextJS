import { AvancesUpdateManyWithoutProyectoInput } from "../inputs/AvancesUpdateManyWithoutProyectoInput";
import { EnumEnum_EstadoProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoProyectoFieldUpdateOperationsInput";
import { EnumEnum_FaseProyectoFieldUpdateOperationsInput } from "../inputs/EnumEnum_FaseProyectoFieldUpdateOperationsInput";
import { InscripcionUpdateManyWithoutProyectoInput } from "../inputs/InscripcionUpdateManyWithoutProyectoInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ObjetivosEspecificosUpdateManyWithoutProyectoInput } from "../inputs/ObjetivosEspecificosUpdateManyWithoutProyectoInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProyectoUpdateWithoutLiderInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    presupuesto?: NullableStringFieldUpdateOperationsInput | undefined;
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    fechaFin?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoProyectoFieldUpdateOperationsInput | undefined;
    fase?: EnumEnum_FaseProyectoFieldUpdateOperationsInput | undefined;
    objetivoGeneral?: NullableStringFieldUpdateOperationsInput | undefined;
    avances?: AvancesUpdateManyWithoutProyectoInput | undefined;
    inscripciones?: InscripcionUpdateManyWithoutProyectoInput | undefined;
    objetivosEspecificos?: ObjetivosEspecificosUpdateManyWithoutProyectoInput | undefined;
}
