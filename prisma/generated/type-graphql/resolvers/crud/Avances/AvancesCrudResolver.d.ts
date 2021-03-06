import { GraphQLResolveInfo } from "graphql";
import { AggregateAvancesArgs } from "./args/AggregateAvancesArgs";
import { CreateAvancesArgs } from "./args/CreateAvancesArgs";
import { CreateManyAvancesArgs } from "./args/CreateManyAvancesArgs";
import { DeleteAvancesArgs } from "./args/DeleteAvancesArgs";
import { DeleteManyAvancesArgs } from "./args/DeleteManyAvancesArgs";
import { FindFirstAvancesArgs } from "./args/FindFirstAvancesArgs";
import { FindManyAvancesArgs } from "./args/FindManyAvancesArgs";
import { FindUniqueAvancesArgs } from "./args/FindUniqueAvancesArgs";
import { GroupByAvancesArgs } from "./args/GroupByAvancesArgs";
import { UpdateAvancesArgs } from "./args/UpdateAvancesArgs";
import { UpdateManyAvancesArgs } from "./args/UpdateManyAvancesArgs";
import { UpsertAvancesArgs } from "./args/UpsertAvancesArgs";
import { Avances } from "../../../models/Avances";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAvances } from "../../outputs/AggregateAvances";
import { AvancesGroupBy } from "../../outputs/AvancesGroupBy";
export declare class AvancesCrudResolver {
    findUniqueAvances(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAvancesArgs): Promise<Avances | null>;
    findFirstAvances(ctx: any, info: GraphQLResolveInfo, args: FindFirstAvancesArgs): Promise<Avances | null>;
    findManyAvances(ctx: any, info: GraphQLResolveInfo, args: FindManyAvancesArgs): Promise<Avances[]>;
    createAvances(ctx: any, info: GraphQLResolveInfo, args: CreateAvancesArgs): Promise<Avances>;
    createManyAvances(ctx: any, info: GraphQLResolveInfo, args: CreateManyAvancesArgs): Promise<AffectedRowsOutput>;
    deleteAvances(ctx: any, info: GraphQLResolveInfo, args: DeleteAvancesArgs): Promise<Avances | null>;
    updateAvances(ctx: any, info: GraphQLResolveInfo, args: UpdateAvancesArgs): Promise<Avances | null>;
    deleteManyAvances(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAvancesArgs): Promise<AffectedRowsOutput>;
    updateManyAvances(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAvancesArgs): Promise<AffectedRowsOutput>;
    upsertAvances(ctx: any, info: GraphQLResolveInfo, args: UpsertAvancesArgs): Promise<Avances>;
    aggregateAvances(ctx: any, info: GraphQLResolveInfo, args: AggregateAvancesArgs): Promise<AggregateAvances>;
    groupByAvances(ctx: any, info: GraphQLResolveInfo, args: GroupByAvancesArgs): Promise<AvancesGroupBy[]>;
}
