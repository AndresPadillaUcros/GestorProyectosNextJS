import { UsuarioCreateOrConnectWithoutAvancesInput } from "../inputs/UsuarioCreateOrConnectWithoutAvancesInput";
import { UsuarioCreateWithoutAvancesInput } from "../inputs/UsuarioCreateWithoutAvancesInput";
import { UsuarioWhereUniqueInput } from "../inputs/UsuarioWhereUniqueInput";
export declare class UsuarioCreateNestedOneWithoutAvancesInput {
    create?: UsuarioCreateWithoutAvancesInput | undefined;
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvancesInput | undefined;
    connect?: UsuarioWhereUniqueInput | undefined;
}
