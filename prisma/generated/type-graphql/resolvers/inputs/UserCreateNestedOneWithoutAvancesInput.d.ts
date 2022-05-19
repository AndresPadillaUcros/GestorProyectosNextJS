import { UserCreateOrConnectWithoutAvancesInput } from "../inputs/UserCreateOrConnectWithoutAvancesInput";
import { UserCreateWithoutAvancesInput } from "../inputs/UserCreateWithoutAvancesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAvancesInput {
    create?: UserCreateWithoutAvancesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAvancesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
