/*
  Warnings:

  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnCustomers" (
    "userId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsersOnCustomers_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "fidelity_card_programs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stamps_to_complete" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fidelity_card_programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stamp" (
    "fidelityCardProgramId" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Stamp_pkey" PRIMARY KEY ("fidelityCardProgramId","customerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- AddForeignKey
ALTER TABLE "UsersOnCustomers" ADD CONSTRAINT "UsersOnCustomers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnCustomers" ADD CONSTRAINT "UsersOnCustomers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fidelity_card_programs" ADD CONSTRAINT "fidelity_card_programs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stamp" ADD CONSTRAINT "Stamp_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stamp" ADD CONSTRAINT "Stamp_fidelityCardProgramId_fkey" FOREIGN KEY ("fidelityCardProgramId") REFERENCES "fidelity_card_programs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
