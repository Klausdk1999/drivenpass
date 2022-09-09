import { prisma } from "../database.js";
import { cards } from "@prisma/client";

export type TypeNewCard = Omit<cards, "id">;

export async function insertCard(newCard: TypeNewCard) {
	await prisma.cards.create({ data: newCard });
}

export async function getAllCards(id: number) {
	return await prisma.cards.findMany({ where: { owner_id: id } });
}

export async function getCardsById(id: number) {
	return await prisma.cards.findUnique({ where: { id } });
}

export async function deleteCard(id: number) {
	await prisma.cards.delete({ where: { id } });
}

export async function getCardByTitle(owner_id: number, title: string) {
	return await prisma.cards.findMany({ where: { title, owner_id } });
}