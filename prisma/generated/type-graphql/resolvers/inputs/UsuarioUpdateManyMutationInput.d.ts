import { EnumEnum_EstadoUsuarioFieldUpdateOperationsInput } from "../inputs/EnumEnum_EstadoUsuarioFieldUpdateOperationsInput";
import { EnumEnum_RolFieldUpdateOperationsInput } from "../inputs/EnumEnum_RolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UsuarioUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    apellido?: StringFieldUpdateOperationsInput | undefined;
    identificacion?: StringFieldUpdateOperationsInput | undefined;
    rol?: EnumEnum_RolFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_EstadoUsuarioFieldUpdateOperationsInput | undefined;
}
