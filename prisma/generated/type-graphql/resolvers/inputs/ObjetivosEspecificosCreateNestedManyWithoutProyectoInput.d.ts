import { ObjetivosEspecificosCreateManyProyectoInputEnvelope } from "../inputs/ObjetivosEspecificosCreateManyProyectoInputEnvelope";
import { ObjetivosEspecificosCreateOrConnectWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateOrConnectWithoutProyectoInput";
import { ObjetivosEspecificosCreateWithoutProyectoInput } from "../inputs/ObjetivosEspecificosCreateWithoutProyectoInput";
import { ObjetivosEspecificosWhereUniqueInput } from "../inputs/ObjetivosEspecificosWhereUniqueInput";
export declare class ObjetivosEspecificosCreateNestedManyWithoutProyectoInput {
    create?: ObjetivosEspecificosCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: ObjetivosEspecificosCreateOrConnectWithoutProyectoInput[] | undefined;
    createMany?: ObjetivosEspecificosCreateManyProyectoInputEnvelope | undefined;
    connect?: ObjetivosEspecificosWhereUniqueInput[] | undefined;
}
