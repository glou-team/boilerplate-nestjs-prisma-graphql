/*
  Warnings:

  - You are about to drop the `Stamp` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stamp" DROP CONSTRAINT "Stamp_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Stamp" DROP CONSTRAINT "Stamp_fidelityCardProgramId_fkey";

-- DropTable
DROP TABLE "Stamp";

-- CreateTable
CREATE TABLE "stamps" (
    "fidelityCardProgramId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "stamps_pkey" PRIMARY KEY ("fidelityCardProgramId","customerId")
);

-- AddForeignKey
ALTER TABLE "stamps" ADD CONSTRAINT "stamps_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stamps" ADD CONSTRAINT "stamps_fidelityCardProgramId_fkey" FOREIGN KEY ("fidelityCardProgramId") REFERENCES "fidelity_card_programs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
