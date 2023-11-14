import { ICharacter, IResponse } from './interfaces';

const headers = {
  'Content-Type': 'application/json',
};

export const fetchCharacters = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: headers,
      method: 'GET',
    });
    return (await response.json()) as Promise<IResponse>;
  } catch (e: { error: string } | unknown) {
    console.log(e);
  }
};

export const fetchCharacter = async (url: string) => {
  try {
    const response = await fetch(url, {
      headers: headers,
      method: 'GET',
    });
    return (await response.json()) as Promise<ICharacter>;
  } catch (e: { error: string } | unknown) {
    console.log(e);
  }
};
