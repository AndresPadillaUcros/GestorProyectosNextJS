-- AlterEnum
ALTER TYPE "Enum_EstadoInscripcion" ADD VALUE 'Pendiente';

-- AlterTable
ALTER TABLE "Avances" ALTER COLUMN "fecha" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "observaciones" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Inscripcion" ALTER COLUMN "estado" SET DEFAULT E'Pendiente',
ALTER COLUMN "fechaIngreso" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "fechaEgreso" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Proyecto" ALTER COLUMN "presupuesto" DROP NOT NULL,
ALTER COLUMN "fechaInicio" DROP NOT NULL,
ALTER COLUMN "objetivoGeneral" DROP NOT NULL;
