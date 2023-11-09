import { FormEvent, useEffect, useState } from 'react';
import classes from '../css/layout.module.css';
import ButtonWithError from './ButtonWithError';
import { getUrl } from '../utils/utils';

interface IHeaderProps {
  getData: (url: string) => Promise<void>;
}

const Header = ({ getData }: IHeaderProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue') || '');
  }, []);

  const clickHandler = async () => {
    localStorage.setItem('searchValue', searchValue);
    const url = getUrl(searchValue);
    await getData(url);
  };

  const searchHandler = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  return (
    <header className={classes.container}>
      <div className={classes['inner-wrapper'] + ' ' + classes['header-wrapper']}>
        <div className="search-box">
          <div className="search-text">
            <input type="text" name="searchValue" value={searchValue} onInput={searchHandler} />
          </div>
          <div className="search-button">
            <input type="button" value="Search" onClick={clickHandler} />
            <ButtonWithError />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
