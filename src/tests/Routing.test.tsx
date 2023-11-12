import { act, cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from '../pages/Page404.tsx';
import MainPage from '../pages/MainPage.tsx';
import App from '../App.tsx';

const data = {
  results: [
    {
      created: '2017-11-04T18:48:46.250Z',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      gender: 'Male',
      id: 2,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
      name: 'Rick Sanchez',
      origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
      species: 'Human',
      status: 'Alive',
      type: '',
      url: 'https://rickandmortyapi.com/api/character/1',
    },
  ],
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
) as jest.Mock;

describe('Application', () => {
  afterEach(() => {
    cleanup();
  });

  it('should show 404 page message', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
    expect(screen.getByText(/На главную/i)).toBeTruthy();
  });

  // it('should', async () => {
  //   const data = null;
  //   global.fetch = jest.fn(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve(data),
  //     })
  //   ) as jest.Mock;
  //   act(() => {
  //     render(
  //       <BrowserRouter>
  //         <CharacterPage />
  //       </BrowserRouter>
  //     );
  //   });
  //   expect(screen.getByTestId('loader')).toBeDefined();
  // });
  //
  test('renders CharacterPage for specific character route', async () => {
    await act(async () => {
      render(<MainPage />);
    });
    expect(screen.getByTestId('mainpage-wrap')).toBeDefined();
  });

  test('renders CharacterPage for specific character route', async () => {
    await act(async () => {
      render(<App />);
    });
  });

  test('renders CharacterPage for specific character route', async () => {
    await act(async () => {
      render(<App />);
    });
  });
});
