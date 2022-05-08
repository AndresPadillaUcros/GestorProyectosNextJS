import { GraphQLResolveInfo } from "graphql";
import { UpsertInscripcionArgs } from "./args/UpsertInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class UpsertInscripcionResolver {
    upsertInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpsertInscripcionArgs): Promise<Inscripcion>;
}
