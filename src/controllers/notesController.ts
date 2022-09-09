import { Request, Response } from "express";
import * as noteService from "../services/notesService.js";

export async function createSecure_notes(req: Request, res: Response) {
	const data = req.body;
	const { id: owner_id } = res.locals.tokenDecoded;

	await noteService.createSecure_note({ ...data, owner_id });

	res.sendStatus(201);
}

export async function getSecure_notesFromUser(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const Secure_notes = await noteService.sendSecure_notesFromUser(id);

	res.status(200).send(Secure_notes);
}

export async function getSecure_notesById(req: Request, res: Response) {
	const { id: owner_id } = res.locals.tokenDecoded;
	const { id } = req.params;

	const Secure_notes = await noteService.findSecure_noteById(	Number(id),	owner_id);

	res.status(200).send(Secure_notes);
}

export async function deleteSecure_note(req: Request, res: Response) {
	const { id: owner_id } = res.locals.tokenDecoded;
	const { id } = req.params;

	await noteService.deleteSecure_note(Number(id), owner_id);

    //res.sendStatus(204);
	res.sendStatus(202);
}