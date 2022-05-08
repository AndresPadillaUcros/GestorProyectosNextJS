import { UsuarioCreateOrConnectWithoutInscripcionesInput } from "../inputs/UsuarioCreateOrConnectWithoutInscripcionesInput";
import { UsuarioCreateWithoutInscripcionesInput } from "../inputs/UsuarioCreateWithoutInscripcionesInput";
import { UsuarioUpdateWithoutInscripcionesInput } from "../inputs/UsuarioUpdateWithoutInscripcionesInput";
import { UsuarioUpsertWithoutInscripcionesInput } from "../inputs/UsuarioUpsertWithoutInscripcionesInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutInscripcionesInput {
    create?: UsuarioCreateWithoutInscripcionesInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutInscripcionesInput | undefined;
    upsert?: UsuarioUpsertWithoutInscripcionesInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutInscripcionesInput | undefined;
}
