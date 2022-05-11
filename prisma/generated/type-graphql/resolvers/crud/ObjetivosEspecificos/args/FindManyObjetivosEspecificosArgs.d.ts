import { ObjetivosEspecificosOrderByWithRelationInput } from "../../../inputs/ObjetivosEspecificosOrderByWithRelationInput";
import { ObjetivosEspecificosWhereInput } from "../../../inputs/ObjetivosEspecificosWhereInput";
import { ObjetivosEspecificosWhereUniqueInput } from "../../../inputs/ObjetivosEspecificosWhereUniqueInput";
export declare class FindManyObjetivosEspecificosArgs {
    where?: ObjetivosEspecificosWhereInput | undefined;
    orderBy?: ObjetivosEspecificosOrderByWithRelationInput[] | undefined;
    cursor?: ObjetivosEspecificosWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "descripcion" | "proyectoId"> | undefined;
}
