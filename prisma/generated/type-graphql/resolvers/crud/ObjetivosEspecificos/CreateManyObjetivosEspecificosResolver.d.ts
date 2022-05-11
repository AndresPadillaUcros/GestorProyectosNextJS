import { GraphQLResolveInfo } from "graphql";
import { CreateManyObjetivosEspecificosArgs } from "./args/CreateManyObjetivosEspecificosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyObjetivosEspecificosResolver {
    createManyObjetivosEspecificos(ctx: any, info: GraphQLResolveInfo, args: CreateManyObjetivosEspecificosArgs): Promise<AffectedRowsOutput>;
}
