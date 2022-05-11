import { GraphQLResolveInfo } from "graphql";
import { UpdateObjetivosEspecificosArgs } from "./args/UpdateObjetivosEspecificosArgs";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
export declare class UpdateObjetivosEspecificosResolver {
    updateObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: UpdateObjetivosEspecificosArgs): Promise<ObjetivosEspecificos | null>;
}
