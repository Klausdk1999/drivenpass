import * as memeRepository from '../repositories/memeRepository.js';
import { TypeMemeData } from '../types/MemeTypes.js';

export async function findAll() {
  const memes = await memeRepository.findAll();
  return memes;
}

export async function insert(meme: TypeMemeData) {
  await memeRepository.insert(meme);
}
