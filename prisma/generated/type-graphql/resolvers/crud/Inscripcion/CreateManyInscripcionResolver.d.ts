import { GraphQLResolveInfo } from "graphql";
import { CreateManyInscripcionArgs } from "./args/CreateManyInscripcionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyInscripcionResolver {
    createManyInscripcion(ctx: any, info: GraphQLResolveInfo, args: CreateManyInscripcionArgs): Promise<AffectedRowsOutput>;
}
