import { GraphQLResolveInfo } from "graphql";
import { DeleteObjetivosEspecificosArgs } from "./args/DeleteObjetivosEspecificosArgs";
import { ObjetivosEspecificos } from "../../../models/ObjetivosEspecificos";
export declare class DeleteObjetivosEspecificosResolver {
    deleteObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: DeleteObjetivosEspecificosArgs): Promise<ObjetivosEspecificos | null>;
}
