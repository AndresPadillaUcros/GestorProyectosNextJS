import { GraphQLResolveInfo } from "graphql";
import { FindFirstObjetivosEspecificosArgs } from "./args/FindFirstObjetivosEspecificosArgs";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
export declare class FindFirstObjetivosEspecificosResolver {
    findFirstObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: FindFirstObjetivosEspecificosArgs): Promise<ObjetivosEspecificos | null>;
}
