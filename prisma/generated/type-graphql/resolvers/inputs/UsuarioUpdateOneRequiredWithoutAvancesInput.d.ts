import { UsuarioCreateOrConnectWithoutAvancesInput } from "../inputs/UsuarioCreateOrConnectWithoutAvancesInput";
import { UsuarioCreateWithoutAvancesInput } from "../inputs/UsuarioCreateWithoutAvancesInput";
import { UsuarioUpdateWithoutAvancesInput } from "../inputs/UsuarioUpdateWithoutAvancesInput";
import { UsuarioUpsertWithoutAvancesInput } from "../inputs/UsuarioUpsertWithoutAvancesInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioUpdateOneRequiredWithoutAvancesInput {
    create?: UsuarioCreateWithoutAvancesInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvancesInput | undefined;
    upsert?: UsuarioUpsertWithoutAvancesInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
    update?: UsuarioUpdateWithoutAvancesInput | undefined;
}
