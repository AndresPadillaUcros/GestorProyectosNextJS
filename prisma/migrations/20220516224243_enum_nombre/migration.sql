/*
  Warnings:

  - The values [Desarollo] on the enum `Enum_FaseProyecto` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Enum_FaseProyecto_new" AS ENUM ('Iniciado', 'Desarrollo', 'Terminado');
ALTER TABLE "Proyecto" ALTER COLUMN "fase" DROP DEFAULT;
ALTER TABLE "Proyecto" ALTER COLUMN "fase" TYPE "Enum_FaseProyecto_new" USING ("fase"::text::"Enum_FaseProyecto_new");
ALTER TYPE "Enum_FaseProyecto" RENAME TO "Enum_FaseProyecto_old";
ALTER TYPE "Enum_FaseProyecto_new" RENAME TO "Enum_FaseProyecto";
DROP TYPE "Enum_FaseProyecto_old";
ALTER TABLE "Proyecto" ALTER COLUMN "fase" SET DEFAULT 'Iniciado';
COMMIT;
