import { prisma } from "../database.js";
import { secure_notes } from "@prisma/client";

export type TypeNewSecure_notes = Omit<secure_notes, "id">;

export async function insert(newSecure_notes: TypeNewSecure_notes) {
	await prisma.secure_notes.create({ data: newSecure_notes });
}

export async function getAllSecure_notes(id: number) {
	return await prisma.secure_notes.findMany({ where: { owner_id: id } });
}

export async function getSecure_notesById(id: number) {
	return await prisma.secure_notes.findUnique({ where: { id } });
}

export async function deleteSecure_notes(id: number) {
	await prisma.secure_notes.delete({ where: { id } });
}

export async function getSecure_notesByTitle(owner_id: number, title: string) {
	return await prisma.secure_notes.findMany({ where: { title, owner_id } });
}