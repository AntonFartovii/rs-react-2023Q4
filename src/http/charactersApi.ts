import { IResponse } from './interfaces';

const headers = {
  'Content-Type': 'application/json',
};

export const fetchCharacters = async () => {
  const searchValue = localStorage.getItem('searchValue');
  const filter = searchValue ? '/?name=' + localStorage.getItem('searchValue') : '';
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character' + filter, {
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
