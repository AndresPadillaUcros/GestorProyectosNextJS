import { UserCreateOrConnectWithoutAvancesInput } from "../inputs/UserCreateOrConnectWithoutAvancesInput";
import { UserCreateWithoutAvancesInput } from "../inputs/UserCreateWithoutAvancesInput";
import { UserUpdateWithoutAvancesInput } from "../inputs/UserUpdateWithoutAvancesInput";
import { UserUpsertWithoutAvancesInput } from "../inputs/UserUpsertWithoutAvancesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutAvancesInput {
    create?: UserCreateWithoutAvancesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAvancesInput | undefined;
    upsert?: UserUpsertWithoutAvancesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutAvancesInput | undefined;
}
