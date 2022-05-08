import { GraphQLResolveInfo } from "graphql";
import { AggregateInscripcionArgs } from "./args/AggregateInscripcionArgs";
import { AggregateInscripcion } from "../../outputs/AggregateInscripcion";
export declare class AggregateInscripcionResolver {
    aggregateInscripcion(ctx: any, info: GraphQLResolveInfo, args: AggregateInscripcionArgs): Promise<AggregateInscripcion>;
}
