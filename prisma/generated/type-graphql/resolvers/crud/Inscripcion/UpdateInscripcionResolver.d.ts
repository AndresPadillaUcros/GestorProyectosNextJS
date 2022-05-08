import { GraphQLResolveInfo } from "graphql";
import { UpdateInscripcionArgs } from "./args/UpdateInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class UpdateInscripcionResolver {
    updateInscripcion(ctx: any, info: GraphQLResolveInfo, args: UpdateInscripcionArgs): Promise<Inscripcion | null>;
}
