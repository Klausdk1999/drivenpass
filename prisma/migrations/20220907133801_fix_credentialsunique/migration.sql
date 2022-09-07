/*
  Warnings:

  - A unique constraint covering the columns `[owner_id,name]` on the table `credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "credentials_owner_id_name_key" ON "credentials"("owner_id", "name");
