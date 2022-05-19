import { InscripcionOrderByWithAggregationInput } from "../../../inputs/InscripcionOrderByWithAggregationInput";
import { InscripcionScalarWhereWithAggregatesInput } from "../../../inputs/InscripcionScalarWhereWithAggregatesInput";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";
export declare class GroupByInscripcionArgs {
    where?: InscripcionWhereInput | undefined;
    orderBy?: InscripcionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "estado" | "fechaIngreso" | "fechaEgreso" | "proyectoId" | "UserId">;
    having?: InscripcionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
