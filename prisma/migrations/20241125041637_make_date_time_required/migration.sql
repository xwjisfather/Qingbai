/*
  Warnings:

  - Made the column `date` on table `bookings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time` on table `bookings` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bookings" ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "time" SET NOT NULL;
