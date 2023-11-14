import { act, render, screen } from '@testing-library/react';
import Main from '../components/Main.tsx';
import { Context } from '../App.tsx';
import { IResponse } from '../http/interfaces.ts';
import { BrowserRouter } from 'react-router-dom';

describe('Main render', () => {
  it('render main', async () => {
    const loading = false;
    render(<Main loading={loading} />);
    await act(async () => {
      const item = await screen.findByText('Ничего не найдено!');
      expect(item).toBeTruthy();
    });
  });

  it('should renponse', async () => {
    const setSearchValue = jest.fn();
    const value = {
      searchValue: 'Rick',
      setSearchValue,
      currentPage: '1',
      countItems: 20,
      response: {
        results: [
          {
            created: '2017-11-04T18:48:46.250Z',
            episode: ['https://rickandmortyapi.com/api/episode/1'],
            gender: 'Male',
            id: 2,
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            location: {
              name: 'Citadel of Ricks',
              url: 'https://rickandmortyapi.com/api/location/3',
            },
            name: 'Rick Sanchez',
            origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
            species: 'Human',
            status: 'Alive',
            type: '',
            url: 'https://rickandmortyapi.com/api/character/1',
          },
        ],
      } as IResponse,
    };
    act(() => {
      render(
        <BrowserRouter>
          <Context.Provider value={value}>
            <Main loading={false} />
          </Context.Provider>
        </BrowserRouter>
      );
    });
  });
});
