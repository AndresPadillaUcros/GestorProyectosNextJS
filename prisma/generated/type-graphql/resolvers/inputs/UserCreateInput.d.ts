import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { AvancesCreateNestedManyWithoutCreadoPorInput } from "../inputs/AvancesCreateNestedManyWithoutCreadoPorInput";
import { InscripcionCreateNestedManyWithoutEstudianteInput } from "../inputs/InscripcionCreateNestedManyWithoutEstudianteInput";
import { ProyectoCreateNestedManyWithoutLiderInput } from "../inputs/ProyectoCreateNestedManyWithoutLiderInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    name?: string | undefined;
    apellido?: string | undefined;
    image?: string | undefined;
    identificacion?: string | undefined;
    rol?: "Estudiante" | "Lider" | "Administrador" | undefined;
    estado?: "Pendiente" | "Autorizado" | "NoAutorizado" | undefined;
    proyectosLiderados?: ProyectoCreateNestedManyWithoutLiderInput | undefined;
    avances?: AvancesCreateNestedManyWithoutCreadoPorInput | undefined;
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
}
