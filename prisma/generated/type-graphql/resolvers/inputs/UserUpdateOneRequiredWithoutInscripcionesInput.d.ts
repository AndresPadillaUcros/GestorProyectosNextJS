import { UserCreateOrConnectWithoutInscripcionesInput } from "../inputs/UserCreateOrConnectWithoutInscripcionesInput";
import { UserCreateWithoutInscripcionesInput } from "../inputs/UserCreateWithoutInscripcionesInput";
import { UserUpdateWithoutInscripcionesInput } from "../inputs/UserUpdateWithoutInscripcionesInput";
import { UserUpsertWithoutInscripcionesInput } from "../inputs/UserUpsertWithoutInscripcionesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutInscripcionesInput {
    create?: UserCreateWithoutInscripcionesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutInscripcionesInput | undefined;
    upsert?: UserUpsertWithoutInscripcionesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutInscripcionesInput | undefined;
}
