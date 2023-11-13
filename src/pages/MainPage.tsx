import { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { fetchCharacters } from '../http/charactersApi';
import classes from '../css/layout.module.css';
import { getUrl } from '../utils/utils';
import { Outlet, useParams } from 'react-router-dom';
import { Context, ContextType } from '../App.tsx';

const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { page } = useParams() as { page: string };
  const { searchValue, setResponse, currentPage, setCurrentPage } =
    useContext<ContextType>(Context);

  useEffect(() => {
    if (setCurrentPage) {
      page && setCurrentPage(page);
    }
  }, []);

  const getData = async (url: string) => {
    setLoading(true);
    console.log(url);
    const response = await fetchCharacters(url);
    console.log(response);
    if (response) {
      if (setResponse) {
        response && setResponse!(response);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = getUrl(searchValue);
    const operand = searchValue ? '&' : '?';
    currentPage ? getData(`${url}${operand}page=${currentPage}`) : getData(url);
  }, [currentPage]);

  return (
    <div className={classes.wrapper} data-testid="mainpage-wrap">
      <Header getData={getData} />
      <div className="container-frontpage">
        <div className="left-front">
          <Main loading={loading} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
