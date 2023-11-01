import { IResponse } from './interfaces';

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
    return await response.json();
  } catch (e: { error: string } | unknown) {
    console.log(e);
  }
};
