import { UserCreateOrConnectWithoutProyectosLideradosInput } from "../inputs/UserCreateOrConnectWithoutProyectosLideradosInput";
import { UserCreateWithoutProyectosLideradosInput } from "../inputs/UserCreateWithoutProyectosLideradosInput";
import { UserUpdateWithoutProyectosLideradosInput } from "../inputs/UserUpdateWithoutProyectosLideradosInput";
import { UserUpsertWithoutProyectosLideradosInput } from "../inputs/UserUpsertWithoutProyectosLideradosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutProyectosLideradosInput {
    create?: UserCreateWithoutProyectosLideradosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProyectosLideradosInput | undefined;
    upsert?: UserUpsertWithoutProyectosLideradosInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutProyectosLideradosInput | undefined;
}
