import { GraphQLResolveInfo } from "graphql";
import { CreateObjetivosEspecificosArgs } from "./args/CreateObjetivosEspecificosArgs";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
export declare class CreateObjetivosEspecificosResolver {
    createObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: CreateObjetivosEspecificosArgs): Promise<ObjetivosEspecificos>;
}
