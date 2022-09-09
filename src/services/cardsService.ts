import * as cardrepository from "../repositories/cardsRepository.js";
import Cryptr from "cryptr";

export async function sendCardsFromUser(id: number) {
	
	const cryptr = new Cryptr(process.env.SECRET);
	const cards = await cardrepository.getAllCards(id);

	const sendInformations = cards.map((elem, index) => {
        
		return {
			id: elem.id,
			name: elem.name,
			number: elem.number,
			cvc: cryptr.decrypt(elem.cvc),
			expiration_date: elem.expiration_date,
			password: cryptr.decrypt(elem.password),
			is_virtual: elem.is_virtual,
			type: elem.type
		};
    });
	
    return { cards: sendInformations };
}

export async function findCardById(id: number, owner_id: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const card = await checkCard(id, owner_id);

	return { ...card, password: cryptr.decrypt(card.password) };
}

export async function createCard(	data: cardrepository.TypeNewCard) {
	const cryptr = new Cryptr(process.env.SECRET);

	await checkCardTitle(data.owner_id, data.name);

	await cardrepository.insertCard({	...data,password: cryptr.encrypt(data.password),});
}

async function checkCardTitle(owner_id: number, name: string) {
	const card = await cardrepository.getCardByTitle(owner_id,name);

	if (card.length)
		throw {	code: "Conflict",message: "Já existe um cartão com esse nome. Exclua o outro ou altere o nome.",};
}

export async function deleteCard(id: number, owner_id: number) {
	await checkCard(id, owner_id);

	await cardrepository.deleteCard(id);
}

async function checkCard(cardId: number, owner_id: number) {
	const card= await cardrepository.getCardsById(cardId);

	if (!card)
		throw { code: "NotFound", message: "Esste cartão não existe" };

	if (card.owner_id !== owner_id)
		throw {	code: "Unauthorized", message: "Você não tem permissão para ver cartões de outros usuários.",};

	return card;
}