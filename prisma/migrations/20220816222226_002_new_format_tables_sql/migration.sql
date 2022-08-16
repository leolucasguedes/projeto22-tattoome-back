/*
  Warnings:

  - You are about to drop the `arts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `feedbacks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `flashs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `works` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageURL` to the `portfolio_images` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "arts" DROP CONSTRAINT "arts_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "flashs" DROP CONSTRAINT "flashs_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_portfolioId_fkey";

-- AlterTable
ALTER TABLE "portfolio_images" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageURL" TEXT NOT NULL;

-- DropTable
DROP TABLE "arts";

-- DropTable
DROP TABLE "feedbacks";

-- DropTable
DROP TABLE "flashs";

-- DropTable
DROP TABLE "works";
