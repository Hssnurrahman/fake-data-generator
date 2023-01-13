-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('none', 'low', 'medium', 'high');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "time_zone" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
