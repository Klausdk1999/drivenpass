import * as wifisRepository from "../repositories/wifiRepository.js";
import Cryptr from "cryptr";

export async function sendWifisFromUser(id: number) {
	
	const cryptr = new Cryptr(process.env.SECRET);
	const wifis = await wifisRepository.getAllWifis(id);

	const sendInformations = wifis.map((elem, index) => {
        
            return {
				id: elem.id,
                name: elem.name,
                network: elem.network,
                password: cryptr.decrypt(elem.password),
            };
    });
	
    return { wifis: sendInformations };
}

export async function findWifiById(id: number, owner_id: number) {
	const cryptr = new Cryptr(process.env.SECRET);

	const wifi = await checkWifi(id, owner_id);

	return { ...wifi, password: cryptr.decrypt(wifi.password) };
}

export async function createWifi(	data: wifisRepository.TypeNewWifi) {
	const cryptr = new Cryptr(process.env.SECRET);

	await checkWifiTitle(data.owner_id, data.name);

	await wifisRepository.insert({	...data,password: cryptr.encrypt(data.password),});
}

async function checkWifiTitle(owner_id: number, name: string) {
	const wifi = await wifisRepository.getWifiByTitle(	owner_id,name);

	if (wifi.length)
		throw {	code: "Conflict",message: "Já existe uma wifi com esse nome. Exclua a outra ou altere o nome.",};
}

export async function deleteWifi(id: number, owner_id: number) {
	await checkWifi(id, owner_id);

	await wifisRepository.deleteWifi(id);
}

async function checkWifi(wifiId: number, owner_id: number) {
	const wifi = await wifisRepository.getWifiById(wifiId);

	if (!wifi)
		throw { code: "NotFound", message: "Este wifi não existe" };

	if (wifi.owner_id !== owner_id)
		throw {	code: "Unauthorized", message: "Você não tem permissão para ver wifis de outros usuários.",};

	return wifi;
}