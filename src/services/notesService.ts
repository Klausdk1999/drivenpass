import * as secure_notesRepository from "../repositories/notesRepository.js";

export async function sendSecure_notesFromUser(id: number) {
	
	const secure_notes = await secure_notesRepository.getAllSecure_notes(id);

	const sendInformations = secure_notes.map((elem, index) => {
        
            return {
				id: elem.id,
                title: elem.title,
                anotation: elem.anotation,
            };
    });
	
    return { wifis: sendInformations };
}

export async function findSecure_noteById(id: number, owner_id: number) {

	const secure_notes = await checkSecure_note(id, owner_id);

	return { ...secure_notes };
}

export async function createSecure_note(	data: secure_notesRepository.TypeNewSecure_notes) {

	await checkSecure_noteTitle(data.owner_id, data.title);

	await secure_notesRepository.insert({	...data});
}

async function checkSecure_noteTitle(owner_id: number, name: string) {
	const secure_note = await secure_notesRepository.getSecure_notesByTitle(owner_id,name);

	if (secure_note.length)
		throw {	code: "Conflict",message: "Já existe uma secure_note com esse titulo. Exclua a outra ou altere o nome.",};
}

export async function deleteSecure_note(id: number, owner_id: number) {
	await checkSecure_note(id, owner_id);

	await secure_notesRepository.deleteSecure_notes(id);
}

async function checkSecure_note(secure_noteId: number, owner_id: number) {
	const secure_note = await secure_notesRepository.getSecure_notesById(secure_noteId);

	if (!secure_note)
		throw { code: "NotFound", message: "Esta nota não existe" };

	if (secure_note.owner_id !== owner_id)
		throw {	code: "Unauthorized", message: "Você não tem permissão para ver wifis de outros usuários.",};

	return secure_note;
}