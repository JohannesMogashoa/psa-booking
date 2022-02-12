/*
  Warnings:

  - You are about to drop the column `bursaryName` on the `ApplicationForm` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `ApplicationForm` table. All the data in the column will be lost.
  - You are about to drop the column `payerFullName` on the `ApplicationForm` table. All the data in the column will be lost.
  - You are about to drop the column `payerIdNumber` on the `ApplicationForm` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ApplicationForm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "building" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "funding" TEXT NOT NULL DEFAULT 'nsfas',
    "parentFullName" TEXT NOT NULL,
    "parentCellNumber" TEXT NOT NULL,
    "studentNumber" TEXT NOT NULL,
    CONSTRAINT "ApplicationForm_studentNumber_fkey" FOREIGN KEY ("studentNumber") REFERENCES "Student" ("studentNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ApplicationForm" ("building", "funding", "id", "parentCellNumber", "parentFullName", "roomType", "studentNumber") SELECT "building", "funding", "id", "parentCellNumber", "parentFullName", "roomType", "studentNumber" FROM "ApplicationForm";
DROP TABLE "ApplicationForm";
ALTER TABLE "new_ApplicationForm" RENAME TO "ApplicationForm";
CREATE UNIQUE INDEX "ApplicationForm_studentNumber_key" ON "ApplicationForm"("studentNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
