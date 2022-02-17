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
    "status" TEXT NOT NULL DEFAULT 'processed',
    CONSTRAINT "ApplicationForm_studentNumber_fkey" FOREIGN KEY ("studentNumber") REFERENCES "Student" ("studentNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ApplicationForm" ("building", "funding", "id", "parentCellNumber", "parentFullName", "roomType", "studentNumber") SELECT "building", "funding", "id", "parentCellNumber", "parentFullName", "roomType", "studentNumber" FROM "ApplicationForm";
DROP TABLE "ApplicationForm";
ALTER TABLE "new_ApplicationForm" RENAME TO "ApplicationForm";
CREATE UNIQUE INDEX "ApplicationForm_studentNumber_key" ON "ApplicationForm"("studentNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
