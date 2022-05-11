import { GraphQLResolveInfo } from "graphql";
import { FindUniqueObjetivosEspecificosArgs } from "./args/FindUniqueObjetivosEspecificosArgs";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
export declare class FindUniqueObjetivosEspecificosResolver {
    findUniqueObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: FindUniqueObjetivosEspecificosArgs): Promise<ObjetivosEspecificos | null>;
}
