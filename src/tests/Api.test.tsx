import { fetchCharacter, fetchCharacters } from '../http/charactersApi.ts';
import { getUrl } from '../utils/utils.ts';
import { act } from '@testing-library/react';
import { characterTest } from './Character.test.tsx';
import { IResponse } from '../http/interfaces.ts';

const response = {
  results: [characterTest],
} as IResponse;

describe('Application', () => {
  it('API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(response),
      })
    ) as jest.Mock;
    await act(async () => {
      const res = await fetchCharacters('https://rickandmortyapi.com/api/character');
      expect(res).not.toBeNull();
    });
  });

  it('API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(characterTest),
      })
    ) as jest.Mock;
    await act(async () => {
      const res = await fetchCharacter('https://rickandmortyapi.com/api/character');
      expect(res).not.toBeNull();
    });
  });

  it('should return ulr with filter', () => {
    const value = 'Rick';
    const url = getUrl(value);
    expect(url).toBe(`https://rickandmortyapi.com/api/character/?name=${value}`);
  });

  it('should return ulr without filter', () => {
    const value = '';
    const url = getUrl(value);
    expect(url).toBe(`https://rickandmortyapi.com/api/character`);
  });
});
