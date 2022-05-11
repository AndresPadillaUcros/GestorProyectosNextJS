import { GraphQLResolveInfo } from "graphql";
import { FindManyObjetivosEspecificosArgs } from "./args/FindManyObjetivosEspecificosArgs";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
export declare class FindManyObjetivosEspecificosResolver {
    findManyObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: FindManyObjetivosEspecificosArgs): Promise<ObjetivosEspecificos[]>;
}
