import { UsuarioCreateOrConnectWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateOrConnectWithoutProyectosLideradosInput";
import { UsuarioCreateWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateWithoutProyectosLideradosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutProyectosLideradosInput {
    create?: UsuarioCreateWithoutProyectosLideradosInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutProyectosLideradosInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
