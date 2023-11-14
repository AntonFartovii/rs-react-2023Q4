import { BrowserRouter } from 'react-router-dom';
import Pagination from '../components/Pagination.tsx';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Context } from '../App.tsx';
import { IResponse } from '../http/interfaces.ts';

describe('Pagination', () => {
  it('render', async () => {
    const setSearchValue = jest.fn();
    const value = {
      searchValue: 'Rick',
      setSearchValue,
      currentPage: '1',
      countItems: 20,
      response: { info: { pages: 5 } } as IResponse,
    };
    render(
      <Context.Provider value={value}>
        <BrowserRouter>
          <Pagination />
        </BrowserRouter>
      </Context.Provider>
    );

    waitFor(() => {
      const pageButton = screen.getByTestId('pageItem_5');
      expect(pageButton).toBeDefined();
      fireEvent.click(pageButton);
    });
  });
});
