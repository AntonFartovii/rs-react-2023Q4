import { FormEvent, useContext } from 'react';
import classes from '../css/layout.module.css';
import ButtonWithError from './ButtonWithError';
import { getUrl } from '../utils/utils';
import { Context } from '../App.tsx';

interface IHeaderProps {
  getData: (url: string) => Promise<void>;
}

const Header = ({ getData }: IHeaderProps) => {
  const { setSearchValue, searchValue } = useContext(Context);

  const clickHandler = async () => {
    searchValue && localStorage.setItem('searchValue', searchValue);
    const url = getUrl(searchValue);
    await getData(url);
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
