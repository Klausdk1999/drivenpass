import { prisma } from '../database.js';
import { TypeMemeData, UpdateMemeData } from '../types/MemeTypes.js';

export async function findAll() {
  const result = await prisma.memes.findMany();
  return result;
}

export async function findByTitle(title: string) {
  const result = await prisma.memes.findUnique({ where: { title } });
  return result;
}

export async function insert(meme: TypeMemeData) {
  await prisma.memes.create({ data: meme });
}

export async function update(id: number, meme: UpdateMemeData) {
  await prisma.memes.update({ where: { id }, data: meme });
}

async function remove(id: number) {
  await prisma.memes.delete({ where: { id } });
}
