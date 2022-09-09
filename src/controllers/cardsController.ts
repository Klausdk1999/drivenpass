import { Request, Response } from "express";
import * as cardServices from "../services/cardsService.js";

export async function createCard(req: Request, res: Response) {
	const data = req.body;
	const { id: owner_id } = res.locals.tokenDecoded;

	await cardServices.createCard({ ...data, owner_id });

	res.sendStatus(201);
}

export async function getCardsFromUser(req: Request, res: Response) {
	const { id } = res.locals.tokenDecoded;

	const cards = await cardServices.sendCardsFromUser(id);

	res.status(200).send(cards);
}

export async function getCardById(req: Request, res: Response) {
	const { id: owner_id } = res.locals.tokenDecoded;
	const { id } = req.params;

	const cards = await cardServices.findCardById(	Number(id),	owner_id);

	res.status(200).send(cards);
}

export async function deleteCard(req: Request, res: Response) {
	const { id: owner_id } = res.locals.tokenDecoded;
	const { id } = req.params;

	await cardServices.deleteCard(Number(id), owner_id);

    //res.sendStatus(204);
	res.sendStatus(202);
}