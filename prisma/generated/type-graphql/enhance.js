"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Usuario: crudResolvers.UsuarioCrudResolver,
    Proyecto: crudResolvers.ProyectoCrudResolver,
    Avances: crudResolvers.AvancesCrudResolver,
    Inscripcion: crudResolvers.InscripcionCrudResolver
};
const actionResolversMap = {
    Usuario: {
        usuario: actionResolvers.FindUniqueUsuarioResolver,
        findFirstUsuario: actionResolvers.FindFirstUsuarioResolver,
        usuarios: actionResolvers.FindManyUsuarioResolver,
        createUsuario: actionResolvers.CreateUsuarioResolver,
        createManyUsuario: actionResolvers.CreateManyUsuarioResolver,
        deleteUsuario: actionResolvers.DeleteUsuarioResolver,
        updateUsuario: actionResolvers.UpdateUsuarioResolver,
        deleteManyUsuario: actionResolvers.DeleteManyUsuarioResolver,
        updateManyUsuario: actionResolvers.UpdateManyUsuarioResolver,
        upsertUsuario: actionResolvers.UpsertUsuarioResolver,
        aggregateUsuario: actionResolvers.AggregateUsuarioResolver,
        groupByUsuario: actionResolvers.GroupByUsuarioResolver
    },
    Proyecto: {
        proyecto: actionResolvers.FindUniqueProyectoResolver,
        findFirstProyecto: actionResolvers.FindFirstProyectoResolver,
        proyectos: actionResolvers.FindManyProyectoResolver,
        createProyecto: actionResolvers.CreateProyectoResolver,
        createManyProyecto: actionResolvers.CreateManyProyectoResolver,
        deleteProyecto: actionResolvers.DeleteProyectoResolver,
        updateProyecto: actionResolvers.UpdateProyectoResolver,
        deleteManyProyecto: actionResolvers.DeleteManyProyectoResolver,
        updateManyProyecto: actionResolvers.UpdateManyProyectoResolver,
        upsertProyecto: actionResolvers.UpsertProyectoResolver,
        aggregateProyecto: actionResolvers.AggregateProyectoResolver,
        groupByProyecto: actionResolvers.GroupByProyectoResolver
    },
    Avances: {
        findUniqueAvances: actionResolvers.FindUniqueAvancesResolver,
        findFirstAvances: actionResolvers.FindFirstAvancesResolver,
        findManyAvances: actionResolvers.FindManyAvancesResolver,
        createAvances: actionResolvers.CreateAvancesResolver,
        createManyAvances: actionResolvers.CreateManyAvancesResolver,
        deleteAvances: actionResolvers.DeleteAvancesResolver,
        updateAvances: actionResolvers.UpdateAvancesResolver,
        deleteManyAvances: actionResolvers.DeleteManyAvancesResolver,
        updateManyAvances: actionResolvers.UpdateManyAvancesResolver,
        upsertAvances: actionResolvers.UpsertAvancesResolver,
        aggregateAvances: actionResolvers.AggregateAvancesResolver,
        groupByAvances: actionResolvers.GroupByAvancesResolver
    },
    Inscripcion: {
        inscripcion: actionResolvers.FindUniqueInscripcionResolver,
        findFirstInscripcion: actionResolvers.FindFirstInscripcionResolver,
        inscripcions: actionResolvers.FindManyInscripcionResolver,
        createInscripcion: actionResolvers.CreateInscripcionResolver,
        createManyInscripcion: actionResolvers.CreateManyInscripcionResolver,
        deleteInscripcion: actionResolvers.DeleteInscripcionResolver,
        updateInscripcion: actionResolvers.UpdateInscripcionResolver,
        deleteManyInscripcion: actionResolvers.DeleteManyInscripcionResolver,
        updateManyInscripcion: actionResolvers.UpdateManyInscripcionResolver,
        upsertInscripcion: actionResolvers.UpsertInscripcionResolver,
        aggregateInscripcion: actionResolvers.AggregateInscripcionResolver,
        groupByInscripcion: actionResolvers.GroupByInscripcionResolver
    }
};
const crudResolversInfo = {
    Usuario: ["usuario", "findFirstUsuario", "usuarios", "createUsuario", "createManyUsuario", "deleteUsuario", "updateUsuario", "deleteManyUsuario", "updateManyUsuario", "upsertUsuario", "aggregateUsuario", "groupByUsuario"],
    Proyecto: ["proyecto", "findFirstProyecto", "proyectos", "createProyecto", "createManyProyecto", "deleteProyecto", "updateProyecto", "deleteManyProyecto", "updateManyProyecto", "upsertProyecto", "aggregateProyecto", "groupByProyecto"],
    Avances: ["findUniqueAvances", "findFirstAvances", "findManyAvances", "createAvances", "createManyAvances", "deleteAvances", "updateAvances", "deleteManyAvances", "updateManyAvances", "upsertAvances", "aggregateAvances", "groupByAvances"],
    Inscripcion: ["inscripcion", "findFirstInscripcion", "inscripcions", "createInscripcion", "createManyInscripcion", "deleteInscripcion", "updateInscripcion", "deleteManyInscripcion", "updateManyInscripcion", "upsertInscripcion", "aggregateInscripcion", "groupByInscripcion"]
};
const argsInfo = {
    FindUniqueUsuarioArgs: ["where"],
    FindFirstUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUsuarioArgs: ["data"],
    CreateManyUsuarioArgs: ["data", "skipDuplicates"],
    DeleteUsuarioArgs: ["where"],
    UpdateUsuarioArgs: ["data", "where"],
    DeleteManyUsuarioArgs: ["where"],
    UpdateManyUsuarioArgs: ["data", "where"],
    UpsertUsuarioArgs: ["where", "create", "update"],
    AggregateUsuarioArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUsuarioArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProyectoArgs: ["where"],
    FindFirstProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProyectoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProyectoArgs: ["data"],
    CreateManyProyectoArgs: ["data", "skipDuplicates"],
    DeleteProyectoArgs: ["where"],
    UpdateProyectoArgs: ["data", "where"],
    DeleteManyProyectoArgs: ["where"],
    UpdateManyProyectoArgs: ["data", "where"],
    UpsertProyectoArgs: ["where", "create", "update"],
    AggregateProyectoArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProyectoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueAvancesArgs: ["where"],
    FindFirstAvancesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAvancesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateAvancesArgs: ["data"],
    CreateManyAvancesArgs: ["data", "skipDuplicates"],
    DeleteAvancesArgs: ["where"],
    UpdateAvancesArgs: ["data", "where"],
    DeleteManyAvancesArgs: ["where"],
    UpdateManyAvancesArgs: ["data", "where"],
    UpsertAvancesArgs: ["where", "create", "update"],
    AggregateAvancesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByAvancesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueInscripcionArgs: ["where"],
    FindFirstInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateInscripcionArgs: ["data"],
    CreateManyInscripcionArgs: ["data", "skipDuplicates"],
    DeleteInscripcionArgs: ["where"],
    UpdateInscripcionArgs: ["data", "where"],
    DeleteManyInscripcionArgs: ["where"],
    UpdateManyInscripcionArgs: ["data", "where"],
    UpsertInscripcionArgs: ["where", "create", "update"],
    AggregateInscripcionArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByInscripcionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Usuario: relationResolvers.UsuarioRelationsResolver,
    Proyecto: relationResolvers.ProyectoRelationsResolver,
    Avances: relationResolvers.AvancesRelationsResolver,
    Inscripcion: relationResolvers.InscripcionRelationsResolver
};
const relationResolversInfo = {
    Usuario: ["proyectosLiderados", "avances", "inscripciones"],
    Proyecto: ["lider", "avances", "inscripciones"],
    Avances: ["proyecto", "creadoPor"],
    Inscripcion: ["proyecto", "estudiante"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Usuario: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    Proyecto: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    Avances: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    Inscripcion: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUsuario: ["_count", "_min", "_max"],
    UsuarioGroupBy: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "_count", "_min", "_max"],
    AggregateProyecto: ["_count", "_avg", "_sum", "_min", "_max"],
    ProyectoGroupBy: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAvances: ["_count", "_min", "_max"],
    AvancesGroupBy: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId", "_count", "_min", "_max"],
    AggregateInscripcion: ["_count", "_min", "_max"],
    InscripcionGroupBy: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UsuarioCount: ["proyectosLiderados", "avances", "inscripciones"],
    UsuarioCountAggregate: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "_all"],
    UsuarioMinAggregate: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    UsuarioMaxAggregate: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    ProyectoCount: ["avances", "inscripciones"],
    ProyectoCountAggregate: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId", "_all"],
    ProyectoAvgAggregate: ["presupuesto"],
    ProyectoSumAggregate: ["presupuesto"],
    ProyectoMinAggregate: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    ProyectoMaxAggregate: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    AvancesCountAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId", "_all"],
    AvancesMinAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    AvancesMaxAggregate: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    InscripcionCountAggregate: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId", "_all"],
    InscripcionMinAggregate: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"],
    InscripcionMaxAggregate: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UsuarioWhereInput: ["AND", "OR", "NOT", "id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "avances", "inscripciones"],
    UsuarioOrderByWithRelationInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "avances", "inscripciones"],
    UsuarioWhereUniqueInput: ["id", "email", "identificacion"],
    UsuarioOrderByWithAggregationInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "_count", "_max", "_min"],
    UsuarioScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    ProyectoWhereInput: ["AND", "OR", "NOT", "id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "usuarioId", "avances", "inscripciones"],
    ProyectoOrderByWithRelationInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "usuarioId", "avances", "inscripciones"],
    ProyectoWhereUniqueInput: ["id"],
    ProyectoOrderByWithAggregationInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId", "_count", "_avg", "_max", "_min", "_sum"],
    ProyectoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    AvancesWhereInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyecto", "proyectoId", "creadoPor", "usuarioId"],
    AvancesOrderByWithRelationInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "proyectoId", "creadoPor", "usuarioId"],
    AvancesWhereUniqueInput: ["id"],
    AvancesOrderByWithAggregationInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId", "_count", "_max", "_min"],
    AvancesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    InscripcionWhereInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "proyectoId", "estudiante", "usuarioId"],
    InscripcionOrderByWithRelationInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "proyectoId", "estudiante", "usuarioId"],
    InscripcionWhereUniqueInput: ["id"],
    InscripcionOrderByWithAggregationInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId", "_count", "_max", "_min"],
    InscripcionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"],
    UsuarioCreateInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "avances", "inscripciones"],
    UsuarioUpdateInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "avances", "inscripciones"],
    UsuarioCreateManyInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    UsuarioUpdateManyMutationInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    ProyectoCreateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances", "inscripciones"],
    ProyectoUpdateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances", "inscripciones"],
    ProyectoCreateManyInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    ProyectoUpdateManyMutationInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
    AvancesCreateInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "creadoPor"],
    AvancesUpdateInput: ["id", "fecha", "descripcion", "observaciones", "proyecto", "creadoPor"],
    AvancesCreateManyInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    AvancesUpdateManyMutationInput: ["id", "fecha", "descripcion", "observaciones"],
    InscripcionCreateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "estudiante"],
    InscripcionUpdateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto", "estudiante"],
    InscripcionCreateManyInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"],
    InscripcionUpdateManyMutationInput: ["id", "estado", "fechaIngreso", "fechaEgreso"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
    EnumEnum_EstadoUsuarioFilter: ["equals", "in", "notIn", "not"],
    ProyectoListRelationFilter: ["every", "some", "none"],
    AvancesListRelationFilter: ["every", "some", "none"],
    InscripcionListRelationFilter: ["every", "some", "none"],
    ProyectoOrderByRelationAggregateInput: ["_count"],
    AvancesOrderByRelationAggregateInput: ["_count"],
    InscripcionOrderByRelationAggregateInput: ["_count"],
    UsuarioCountOrderByAggregateInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    UsuarioMaxOrderByAggregateInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    UsuarioMinOrderByAggregateInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_EstadoUsuarioWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumEnum_EstadoProyectoFilter: ["equals", "in", "notIn", "not"],
    EnumEnum_FaseProyectoFilter: ["equals", "in", "notIn", "not"],
    UsuarioRelationFilter: ["is", "isNot"],
    ProyectoCountOrderByAggregateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    ProyectoAvgOrderByAggregateInput: ["presupuesto"],
    ProyectoMaxOrderByAggregateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    ProyectoMinOrderByAggregateInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    ProyectoSumOrderByAggregateInput: ["presupuesto"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumEnum_EstadoProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    EnumEnum_FaseProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    ProyectoRelationFilter: ["is", "isNot"],
    AvancesCountOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    AvancesMaxOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    AvancesMinOrderByAggregateInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    EnumEnum_EstadoInscripcionFilter: ["equals", "in", "notIn", "not"],
    InscripcionCountOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"],
    InscripcionMaxOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"],
    InscripcionMinOrderByAggregateInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"],
    EnumEnum_EstadoInscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    ProyectoCreateNestedManyWithoutLiderInput: ["create", "connectOrCreate", "createMany", "connect"],
    AvancesCreateNestedManyWithoutCreadoPorInput: ["create", "connectOrCreate", "createMany", "connect"],
    InscripcionCreateNestedManyWithoutEstudianteInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumEnum_RolFieldUpdateOperationsInput: ["set"],
    EnumEnum_EstadoUsuarioFieldUpdateOperationsInput: ["set"],
    ProyectoUpdateManyWithoutLiderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AvancesUpdateManyWithoutCreadoPorInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InscripcionUpdateManyWithoutEstudianteInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UsuarioCreateNestedOneWithoutProyectosLideradosInput: ["create", "connectOrCreate", "connect"],
    AvancesCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
    InscripcionCreateNestedManyWithoutProyectoInput: ["create", "connectOrCreate", "createMany", "connect"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    EnumEnum_EstadoProyectoFieldUpdateOperationsInput: ["set"],
    EnumEnum_FaseProyectoFieldUpdateOperationsInput: ["set"],
    UsuarioUpdateOneRequiredWithoutProyectosLideradosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AvancesUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    InscripcionUpdateManyWithoutProyectoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    ProyectoCreateNestedOneWithoutAvancesInput: ["create", "connectOrCreate", "connect"],
    UsuarioCreateNestedOneWithoutAvancesInput: ["create", "connectOrCreate", "connect"],
    ProyectoUpdateOneRequiredWithoutAvancesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UsuarioUpdateOneRequiredWithoutAvancesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ProyectoCreateNestedOneWithoutInscripcionesInput: ["create", "connectOrCreate", "connect"],
    UsuarioCreateNestedOneWithoutInscripcionesInput: ["create", "connectOrCreate", "connect"],
    EnumEnum_EstadoInscripcionFieldUpdateOperationsInput: ["set"],
    ProyectoUpdateOneRequiredWithoutInscripcionesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UsuarioUpdateOneRequiredWithoutInscripcionesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumEnum_RolFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_EstadoUsuarioFilter: ["equals", "in", "notIn", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_RolWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_EstadoUsuarioWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_EstadoProyectoFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_FaseProyectoFilter: ["equals", "in", "notIn", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumEnum_EstadoProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_FaseProyectoWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedEnumEnum_EstadoInscripcionFilter: ["equals", "in", "notIn", "not"],
    NestedEnumEnum_EstadoInscripcionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    ProyectoCreateWithoutLiderInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "avances", "inscripciones"],
    ProyectoCreateOrConnectWithoutLiderInput: ["where", "create"],
    ProyectoCreateManyLiderInputEnvelope: ["data", "skipDuplicates"],
    AvancesCreateWithoutCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyecto"],
    AvancesCreateOrConnectWithoutCreadoPorInput: ["where", "create"],
    AvancesCreateManyCreadoPorInputEnvelope: ["data", "skipDuplicates"],
    InscripcionCreateWithoutEstudianteInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto"],
    InscripcionCreateOrConnectWithoutEstudianteInput: ["where", "create"],
    InscripcionCreateManyEstudianteInputEnvelope: ["data", "skipDuplicates"],
    ProyectoUpsertWithWhereUniqueWithoutLiderInput: ["where", "update", "create"],
    ProyectoUpdateWithWhereUniqueWithoutLiderInput: ["where", "data"],
    ProyectoUpdateManyWithWhereWithoutLiderInput: ["where", "data"],
    ProyectoScalarWhereInput: ["AND", "OR", "NOT", "id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "usuarioId"],
    AvancesUpsertWithWhereUniqueWithoutCreadoPorInput: ["where", "update", "create"],
    AvancesUpdateWithWhereUniqueWithoutCreadoPorInput: ["where", "data"],
    AvancesUpdateManyWithWhereWithoutCreadoPorInput: ["where", "data"],
    AvancesScalarWhereInput: ["AND", "OR", "NOT", "id", "fecha", "descripcion", "observaciones", "proyectoId", "usuarioId"],
    InscripcionUpsertWithWhereUniqueWithoutEstudianteInput: ["where", "update", "create"],
    InscripcionUpdateWithWhereUniqueWithoutEstudianteInput: ["where", "data"],
    InscripcionUpdateManyWithWhereWithoutEstudianteInput: ["where", "data"],
    InscripcionScalarWhereInput: ["AND", "OR", "NOT", "id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId", "usuarioId"],
    UsuarioCreateWithoutProyectosLideradosInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "avances", "inscripciones"],
    UsuarioCreateOrConnectWithoutProyectosLideradosInput: ["where", "create"],
    AvancesCreateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "creadoPor"],
    AvancesCreateOrConnectWithoutProyectoInput: ["where", "create"],
    AvancesCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
    InscripcionCreateWithoutProyectoInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "estudiante"],
    InscripcionCreateOrConnectWithoutProyectoInput: ["where", "create"],
    InscripcionCreateManyProyectoInputEnvelope: ["data", "skipDuplicates"],
    UsuarioUpsertWithoutProyectosLideradosInput: ["update", "create"],
    UsuarioUpdateWithoutProyectosLideradosInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "avances", "inscripciones"],
    AvancesUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
    AvancesUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
    AvancesUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
    InscripcionUpsertWithWhereUniqueWithoutProyectoInput: ["where", "update", "create"],
    InscripcionUpdateWithWhereUniqueWithoutProyectoInput: ["where", "data"],
    InscripcionUpdateManyWithWhereWithoutProyectoInput: ["where", "data"],
    ProyectoCreateWithoutAvancesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "inscripciones"],
    ProyectoCreateOrConnectWithoutAvancesInput: ["where", "create"],
    UsuarioCreateWithoutAvancesInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "inscripciones"],
    UsuarioCreateOrConnectWithoutAvancesInput: ["where", "create"],
    ProyectoUpsertWithoutAvancesInput: ["update", "create"],
    ProyectoUpdateWithoutAvancesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "inscripciones"],
    UsuarioUpsertWithoutAvancesInput: ["update", "create"],
    UsuarioUpdateWithoutAvancesInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "inscripciones"],
    ProyectoCreateWithoutInscripcionesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances"],
    ProyectoCreateOrConnectWithoutInscripcionesInput: ["where", "create"],
    UsuarioCreateWithoutInscripcionesInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "avances"],
    UsuarioCreateOrConnectWithoutInscripcionesInput: ["where", "create"],
    ProyectoUpsertWithoutInscripcionesInput: ["update", "create"],
    ProyectoUpdateWithoutInscripcionesInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "lider", "avances"],
    UsuarioUpsertWithoutInscripcionesInput: ["update", "create"],
    UsuarioUpdateWithoutInscripcionesInput: ["id", "email", "nombre", "apellido", "identificacion", "rol", "estado", "proyectosLiderados", "avances"],
    ProyectoCreateManyLiderInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase"],
    AvancesCreateManyCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyectoId"],
    InscripcionCreateManyEstudianteInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyectoId"],
    ProyectoUpdateWithoutLiderInput: ["id", "nombre", "presupuesto", "fechaInicio", "fechaFin", "estado", "fase", "avances", "inscripciones"],
    AvancesUpdateWithoutCreadoPorInput: ["id", "fecha", "descripcion", "observaciones", "proyecto"],
    InscripcionUpdateWithoutEstudianteInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "proyecto"],
    AvancesCreateManyProyectoInput: ["id", "fecha", "descripcion", "observaciones", "usuarioId"],
    InscripcionCreateManyProyectoInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "usuarioId"],
    AvancesUpdateWithoutProyectoInput: ["id", "fecha", "descripcion", "observaciones", "creadoPor"],
    InscripcionUpdateWithoutProyectoInput: ["id", "estado", "fechaIngreso", "fechaEgreso", "estudiante"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
