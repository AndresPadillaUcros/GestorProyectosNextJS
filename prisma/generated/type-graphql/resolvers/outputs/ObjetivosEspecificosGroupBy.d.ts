import { ObjetivosEspecificosCountAggregate } from "../outputs/ObjetivosEspecificosCountAggregate";
import { ObjetivosEspecificosMaxAggregate } from "../outputs/ObjetivosEspecificosMaxAggregate";
import { ObjetivosEspecificosMinAggregate } from "../outputs/ObjetivosEspecificosMinAggregate";
export declare class ObjetivosEspecificosGroupBy {
    id: string;
    descripcion: string;
    proyectoId: string;
    _count: ObjetivosEspecificosCountAggregate | null;
    _min: ObjetivosEspecificosMinAggregate | null;
    _max: ObjetivosEspecificosMaxAggregate | null;
}
