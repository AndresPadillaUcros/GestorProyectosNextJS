import { GraphQLResolveInfo } from "graphql";
import { UpsertObjetivosEspecificosArgs } from "./args/UpsertObjetivosEspecificosArgs";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
export declare class UpsertObjetivosEspecificosResolver {
    upsertObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: UpsertObjetivosEspecificosArgs): Promise<ObjetivosEspecificos>;
}
