-- CreateTable
CREATE TABLE "ObjetivosEspecificos" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "proyectoId" TEXT NOT NULL,

    CONSTRAINT "ObjetivosEspecificos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ObjetivosEspecificos" ADD CONSTRAINT "ObjetivosEspecificos_proyectoId_fkey" FOREIGN KEY ("proyectoId") REFERENCES "Proyecto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
