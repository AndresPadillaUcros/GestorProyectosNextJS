import { AvancesUpdateManyWithoutCreadoPorInput } from "../inputs/AvancesUpdateManyWithoutCreadoPorInput";
import { EnumEnum_EstadoUsuarioFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput";
import { EnumEnum_RolFieldUpdateOperationsInput } from "../inputs/EnumEnum_RolFieldUpdateOperationsInput";
import { InscripcionUpdateManyWithoutEstudianteInput } from "../inputs/InscripcionUpdateManyWithoutEstudianteInput";
import { ProyectoUpdateManyWithoutLiderInput } from "../inputs/ProyectoUpdateManyWithoutLiderInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UsuarioUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    apellido?: StringFieldUpdateOperationsInput | undefined;
    identificacion?: StringFieldUpdateOperationsInput | undefined;
    rol?: EnumEnum_RolFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoUsuarioFieldUpdateOperationsInput | undefined;
    proyectosLiderados?: ProyectoUpdateManyWithoutLiderInput | undefined;
    avances?: AvancesUpdateManyWithoutCreadoPorInput | undefined;
    inscripciones?: InscripcionUpdateManyWithoutEstudianteInput | undefined;
}
