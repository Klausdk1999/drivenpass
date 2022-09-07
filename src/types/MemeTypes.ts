import { memes } from '@prisma/client';

export type TypeMemeData = Omit<memes, 'id'>;
export type UpdateMemeData = Partial<memes>;
