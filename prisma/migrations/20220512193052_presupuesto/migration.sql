/*
  Warnings:

  - Made the column `objetivoGeneral` on table `Proyecto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Proyecto" ALTER COLUMN "presupuesto" SET DATA TYPE TEXT,
ALTER COLUMN "estado" SET DEFAULT E'Activo',
ALTER COLUMN "fase" SET DEFAULT E'Iniciado',
ALTER COLUMN "objetivoGeneral" SET NOT NULL;
