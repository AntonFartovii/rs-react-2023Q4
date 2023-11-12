import { act, fireEvent, render, screen } from '@testing-library/react';
import Character from '../components/Character.tsx';
import { ICharacter } from '../http/interfaces.ts';
import { BrowserRouter } from 'react-router-dom';

const character = {
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
} as ICharacter;

describe('Application', () => {
  it('should display all card properties', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <Character item={character} />
        </BrowserRouter>
      );
    });
    const characterItem = await screen.findByTestId('character-item');
    fireEvent.click(characterItem);
    const button = screen.findByRole('button');
    expect(button).toBeTruthy();
    expect(button).toBeDefined();
    expect(screen.getByTestId('image')).toBeDefined();
    expect(screen.getByTestId('name')).toBeDefined();
    expect(screen.getByTestId('species')).toBeDefined();
    expect(screen.getByTestId('status')).toBeDefined();
  });
});
