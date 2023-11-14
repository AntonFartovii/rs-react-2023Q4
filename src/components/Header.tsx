import { FormEvent, useContext } from 'react';
import classes from '../css/layout.module.css';
import ButtonWithError from './ButtonWithError';
import { Context } from '../App.tsx';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE, SEARCH_ROUTE } from '../router/pages.ts';

const Header = () => {
  const { setSearchValue, searchValue, setCurrentPage } = useContext(Context);
  const navigate = useNavigate();

  const clickHandler = async () => {
    setCurrentPage && setCurrentPage('1');
    searchValue && localStorage.setItem('searchValue', searchValue);
    navigate(MAIN_ROUTE + SEARCH_ROUTE + '/1');
  };

  const searchHandler = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchValue && setSearchValue(value);
  };

  return (
    <header className={classes.container}>
      <div className={classes['inner-wrapper'] + ' ' + classes['header-wrapper']}>
        <div className="search-box">
          <div className="search-text">
            <input
              type="text"
              name="searchValue"
              value={searchValue}
              onInput={searchHandler}
              data-testid="searchInput"
            />
          </div>
          <div className="search-button">
            <input type="button" value="Search" onClick={clickHandler} data-testid="sendButton" />
            <ButtonWithError />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
