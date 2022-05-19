import { InscripcionOrderByWithRelationInput } from "../../../inputs/InscripcionOrderByWithRelationInput";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";
import { InscripcionWhereUniqueInput } from "../../../inputs/InscripcionWhereUniqueInput";
export declare class FindManyInscripcionArgs {
    where?: InscripcionWhereInput | undefined;
    orderBy?: InscripcionOrderByWithRelationInput[] | undefined;
    cursor?: InscripcionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "estado" | "fechaIngreso" | "fechaEgreso" | "proyectoId" | "UserId"> | undefined;
}
