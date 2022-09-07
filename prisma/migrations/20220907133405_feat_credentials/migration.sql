-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "credentials_username_key" ON "credentials"("username");

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
