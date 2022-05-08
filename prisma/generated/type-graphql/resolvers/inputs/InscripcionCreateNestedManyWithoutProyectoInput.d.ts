import { InscripcionCreateManyProyectoInputEnvelope } from "../inputs/InscripcionCreateManyProyectoInputEnvelope";
import { InscripcionCreateOrConnectWithoutProyectoInput } from "../inputs/InscripcionCreateOrConnectWithoutProyectoInput";
import { InscripcionCreateWithoutProyectoInput } from "../inputs/InscripcionCreateWithoutProyectoInput";
import { InscripcionWhereUniqueInput } from "../inputs/InscripcionWhereUniqueInput";
export declare class InscripcionCreateNestedManyWithoutProyectoInput {
    create?: InscripcionCreateWithoutProyectoInput[] | undefined;
    connectOrCreate?: InscripcionCreateOrConnectWithoutProyectoInput[] | undefined;
    createMany?: InscripcionCreateManyProyectoInputEnvelope | undefined;
    connect?: InscripcionWhereUniqueInput[] | undefined;
}
