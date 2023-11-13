import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/Router';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import { createContext, useState } from 'react';
import { IResponse } from './http/interfaces.ts';

export type ContextType = {
  searchValue: string;
  setSearchValue?: (value: string) => void;
  response?: IResponse;
  setResponse?: (data: IResponse) => void;
  currentPage: string;
  setCurrentPage?: (value: string) => void;
  countItems: number;
  setCountItems?: (value: number) => void;
};

export const Context = createContext<ContextType>({
  searchValue: '',
  currentPage: '',
  countItems: 20,
});

function App() {
  const [searchValue, setValue] = useState<string>(localStorage.getItem('searchValue') || '');
  const [currentPage, setCurrentPage] = useState<string>('');
  const [countItems, setCountItems] = useState<number>(20);
  const [response, setData] = useState<IResponse>({});

  const saveSearchValue = (value: string) => {
    localStorage.setItem('searchValue', value);
    setValue(value);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue,
            setSearchValue: (value: string) => saveSearchValue(value),
            response,
            setResponse: (data: IResponse) => setData(data),
            currentPage,
            setCurrentPage,
            countItems,
            setCountItems,
          }}
        >
          <AppRouter />
        </Context.Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
