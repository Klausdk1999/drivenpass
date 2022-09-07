-- CreateEnum
CREATE TYPE "Card_type" AS ENUM ('credito', 'debito', 'ambos');

-- CreateTable
CREATE TABLE "secure_notes" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "anotation" TEXT NOT NULL,

    CONSTRAINT "secure_notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255) NOT NULL,
    "cvc" VARCHAR(255) NOT NULL,
    "expiration_date" DATE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "is_virtual" BOOLEAN NOT NULL,
    "type" "Card_type" NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wifis" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "network" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "wifis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secure_notes_owner_id_title_key" ON "secure_notes"("owner_id", "title");

-- CreateIndex
CREATE UNIQUE INDEX "cards_expiration_date_key" ON "cards"("expiration_date");

-- CreateIndex
CREATE UNIQUE INDEX "cards_owner_id_name_key" ON "cards"("owner_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "wifis_owner_id_name_key" ON "wifis"("owner_id", "name");

-- AddForeignKey
ALTER TABLE "secure_notes" ADD CONSTRAINT "secure_notes_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wifis" ADD CONSTRAINT "wifis_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
