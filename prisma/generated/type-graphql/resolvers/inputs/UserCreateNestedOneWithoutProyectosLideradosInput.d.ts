import { UserCreateOrConnectWithoutProyectosLideradosInput } from "../inputs/UserCreateOrConnectWithoutProyectosLideradosInput";
import { UserCreateWithoutProyectosLideradosInput } from "../inputs/UserCreateWithoutProyectosLideradosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutProyectosLideradosInput {
    create?: UserCreateWithoutProyectosLideradosInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProyectosLideradosInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
