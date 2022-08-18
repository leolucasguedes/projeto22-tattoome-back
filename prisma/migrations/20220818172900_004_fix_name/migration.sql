/*
  Warnings:

  - Changed the type of `type` on the `portfolio_images` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PortfolioType" AS ENUM ('Work', 'Art', 'Flash');

-- AlterTable
ALTER TABLE "portfolio_images" DROP COLUMN "type",
ADD COLUMN     "type" "PortfolioType" NOT NULL;

-- DropEnum
DROP TYPE "PortfolioTYpe";
