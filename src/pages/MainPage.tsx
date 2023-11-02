import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { fetchCharacters } from '../http/charactersApi';
import { IResponse } from '../http/interfaces';
import classes from '../css/layout.module.css';
import { getUrl } from '../utils/utils';
import { useParams } from 'react-router-dom';

const MainPage = () => {
  const [response, setResponse] = useState<IResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const { page } = useParams() as { page: string };

  const getData = async (url: string) => {
    setLoading(true);
    const response = await fetchCharacters(url);
    response && console.log(response);
    setResponse(response);
    setLoading(false);
  };

  useEffect(() => {
    const searchValue = localStorage.getItem('searchValue');
    const url = getUrl(searchValue);
    page ? getData(`${url}?page=${page}`) : getData(url);
  }, [page]);

  return (
    <div className={classes.wrapper}>
      <Header getData={getData} />
      <Main getData={getData} loading={loading} response={response} page={page} />
    </div>
  );
};

export default MainPage;
