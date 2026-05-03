-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('INTERNSHIP', 'FULL_TIME', 'PART_TIME');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('SAVED', 'APPLIED', 'SCREEN', 'INTERVIEWING', 'OFFER', 'REJECTED', 'ACCEPTED');

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "location" TEXT,
    "jobType" "JobType" NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'SAVED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);
