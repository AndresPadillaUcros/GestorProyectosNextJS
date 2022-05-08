import { GraphQLResolveInfo } from "graphql";
import { DeleteInscripcionArgs } from "./args/DeleteInscripcionArgs";
import { Inscripcion } from "../../../models/Inscripcion";
export declare class DeleteInscripcionResolver {
    deleteInscripcion(ctx: any, info: GraphQLResolveInfo, args: DeleteInscripcionArgs): Promise<Inscripcion | null>;
}
