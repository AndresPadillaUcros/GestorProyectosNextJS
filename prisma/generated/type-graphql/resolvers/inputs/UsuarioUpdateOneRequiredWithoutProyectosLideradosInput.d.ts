import { UsuarioCreateOrConnectWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateOrConnectWithoutProyectosLideradosInput";
import { UsuarioCreateWithoutProyectosLideradosInput } from "../inputs/UsuarioCreateWithoutProyectosLideradosInput";
import { UsuarioUpdateWithoutProyectosLideradosInput } from "../inputs/UsuarioUpdateWithoutProyectosLideradosInput";
import { UsuarioUpsertWithoutProyectosLideradosInput } from "../inputs/UsuarioUpsertWithoutProyectosLideradosInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutProyectosLideradosInput {
    create?: UsuarioCreateWithoutProyectosLideradosInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutProyectosLideradosInput | undefined;
    upsert?: UsuarioUpsertWithoutProyectosLideradosInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutProyectosLideradosInput | undefined;
}
