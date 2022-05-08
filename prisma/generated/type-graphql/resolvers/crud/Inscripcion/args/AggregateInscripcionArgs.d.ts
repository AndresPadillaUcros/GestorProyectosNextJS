import { InscripcionOrderByWithRelationInput } from "../../../inputs/InscripcionOrderByWithRelationInput";
import { InscripcionWhereInput } from "../../../inputs/InscripcionWhereInput";
import { InscripcionWhereUniqueInput } from "../../../inputs/InscripcionWhereUniqueInput";
export declare class AggregateInscripcionArgs {
    where?: InscripcionWhereInput | undefined;
    orderBy?: InscripcionOrderByWithRelationInput[] | undefined;
    cursor?: InscripcionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
