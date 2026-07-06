/*
  Warnings:

  - You are about to drop the column `githubUsername` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ActivityLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatSession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CodeReview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Repository` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `githubId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "ActivityLog" DROP CONSTRAINT "ActivityLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "ChatSession" DROP CONSTRAINT "ChatSession_userId_fkey";

-- DropForeignKey
ALTER TABLE "CodeReview" DROP CONSTRAINT "CodeReview_repositoryId_fkey";

-- DropForeignKey
ALTER TABLE "CodeReview" DROP CONSTRAINT "CodeReview_userId_fkey";

-- DropForeignKey
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_userId_fkey";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "githubUsername",
ADD COLUMN     "name" TEXT,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
DROP COLUMN "githubId",
ADD COLUMN     "githubId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ActivityLog";

-- DropTable
DROP TABLE "ChatSession";

-- DropTable
DROP TABLE "CodeReview";

-- DropTable
DROP TABLE "Repository";

-- CreateIndex
CREATE UNIQUE INDEX "User_githubId_key" ON "User"("githubId");
