import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import { fetchCharacters } from '../http/charactersApi';
import { IResponse } from '../http/interfaces';
import classes from '../css/layout.module.css';
import { getUrl } from '../utils/utils';

const MainPage = () => {
  const [response, setResponse] = useState<IResponse>();
  const [loading, setLoading] = useState<boolean>(false);

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
    getData(url);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Header getData={getData} />
      <Main getData={getData} loading={loading} response={response} />
    </div>
  );
};

export default MainPage;
