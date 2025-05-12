/*
  Warnings:

  - You are about to drop the `Spec` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Spec" DROP CONSTRAINT "Spec_product_id_fkey";

-- DropTable
DROP TABLE "Spec";
