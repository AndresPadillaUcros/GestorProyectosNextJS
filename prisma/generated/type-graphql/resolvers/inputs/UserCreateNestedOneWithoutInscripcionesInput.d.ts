import { UserCreateOrConnectWithoutInscripcionesInput } from "../inputs/UserCreateOrConnectWithoutInscripcionesInput";
import { UserCreateWithoutInscripcionesInput } from "../inputs/UserCreateWithoutInscripcionesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutInscripcionesInput {
    create?: UserCreateWithoutInscripcionesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutInscripcionesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
