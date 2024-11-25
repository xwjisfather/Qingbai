/*
  Warnings:

  - You are about to drop the column `created_at` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `customer_email` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `customer_name` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `customer_phone` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `payment_status` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `schedule_id` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `bookings` table. All the data in the column will be lost.
  - Added the required column `email` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleId` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_schedule_id_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "created_at",
DROP COLUMN "customer_email",
DROP COLUMN "customer_name",
DROP COLUMN "customer_phone",
DROP COLUMN "payment_status",
DROP COLUMN "schedule_id",
DROP COLUMN "updated_at",
ADD COLUMN     "courseScheduleId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "scheduleId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_courseScheduleId_fkey" FOREIGN KEY ("courseScheduleId") REFERENCES "course_schedules"("id") ON DELETE SET NULL ON UPDATE CASCADE;
