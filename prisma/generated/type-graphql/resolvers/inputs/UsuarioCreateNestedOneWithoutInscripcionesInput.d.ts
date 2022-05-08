import { UsuarioCreateOrConnectWithoutInscripcionesInput } from "../inputs/UsuarioCreateOrConnectWithoutInscripcionesInput";
import { UsuarioCreateWithoutInscripcionesInput } from "../inputs/UsuarioCreateWithoutInscripcionesInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutInscripcionesInput {
    create?: UsuarioCreateWithoutInscripcionesInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionesInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
