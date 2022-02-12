-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstNames" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "studentNumber" TEXT NOT NULL,
    "cellNumber" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "residentialAddress" TEXT NOT NULL,
    "postalAddress" TEXT
);

-- CreateTable
CREATE TABLE "ApplicationForm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "building" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "funding" TEXT NOT NULL DEFAULT 'bursary',
    "bursaryName" TEXT,
    "contactNumber" TEXT NOT NULL,
    "payerFullName" TEXT,
    "payerIdNumber" TEXT,
    "parentFullName" TEXT NOT NULL,
    "parentCellNumber" TEXT NOT NULL,
    "studentNumber" TEXT NOT NULL,
    CONSTRAINT "ApplicationForm_studentNumber_fkey" FOREIGN KEY ("studentNumber") REFERENCES "Student" ("studentNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentNumber_key" ON "Student"("studentNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationForm_studentNumber_key" ON "ApplicationForm"("studentNumber");
