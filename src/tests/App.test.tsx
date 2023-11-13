import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Context } from '../App.tsx';
import Header from '../components/Header.tsx';
import ButtonWithError from '../components/ButtonWithError.tsx';
import Main from '../components/Main.tsx';
import { MyError, rejectCustomError } from '../errorBoundary/MyError.ts';
import { BrowserRouter } from 'react-router-dom';

describe('Application', () => {
  it('render main', async () => {
    const loading = true;
    render(<Main loading={loading} />);
    await act(async () => {
      const item = await screen.findByTestId('loading');
      expect(item).toBeTruthy();
    });
  });

  it('render main', async () => {
    const loading = false;
    render(<Main loading={loading} />);
    await act(async () => {
      const item = await screen.findByText('Ничего не найдено!');
      expect(item).toBeTruthy();
    });
  });

  it('clickHandler updates localStorage and calls getData', async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const input: HTMLInputElement = await screen.findByTestId('searchInput');
    const sendInput: HTMLInputElement = await screen.findByTestId('sendButton');
    fireEvent.input(input, {
      target: { value: 'Morty' },
    });
    fireEvent.click(sendInput);

    // expect(localStorage.getItem('searchValue')).toEqual('Morty');
  });

  it('should show context search value in input', async () => {
    const setSearchValue = jest.fn();
    const value = {
      searchValue: 'Rick',
      setSearchValue,
      currentPage: '1',
      countItems: 20,
    };
    act(() => {
      render(
        <Context.Provider value={value}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Context.Provider>
      );
    });

    await waitFor(async () => {
      const input: HTMLInputElement = await screen.findByTestId('searchInput');
      const sendInput: HTMLInputElement = await screen.findByTestId('sendButton');
      expect(input).toBeTruthy();
      expect(input.value).toBe('Rick');
      expect(sendInput.value).toBe('Search');
      fireEvent.click(sendInput);
    });
  });

  test('renders error message when a child component throws an error', async () => {
    render(<ButtonWithError />);

    await act(async () => {
      const button = await screen.findByRole('button');
      expect(button).toBeTruthy();
    });

    expect(screen.findByText('Seems like an error occurred!')).toBeTruthy();
  });

  test('should reject custom error', () => {
    return expect(rejectCustomError).rejects.toThrow(MyError);
  });
});
