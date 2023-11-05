import React from 'react';
import classes from '../css/layout.module.css';
import { ICharacter, IResponse } from '../http/interfaces';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import { SEARCH_ROUTE } from '../router/pages';

interface MainProps {
  getData: (url: string) => Promise<void>;
  response: IResponse | undefined;
  loading: boolean;
  page: string;
}

const Main = ({ getData, response, loading, page }: MainProps) => {
  const navigate = useNavigate();

  const pageHandler = async (type: string) => {
    const info = response?.info;
    if (type === 'prev') {
      if (info?.prev) {
        await getData(info.prev);
      }
    } else if (type === 'next') {
      if (info?.next) {
        await getData(info.next);
      }
    }
  };

  const openCharacter = (id: number) => {
    navigate(`/${SEARCH_ROUTE}/${page}/details/${id}`);
  };

  const print = () => {
    return (
      <>
        <div className="character-list">
          {response &&
            response.results?.map((item: ICharacter) => (
              <div className="character-item" key={item.id} onClick={() => openCharacter(item.id)}>
                {item.name}
                <div className="character-image">
                  <img src={item.image} />
                </div>
                <div>Location: {item.location.name}</div>
                <div>Species: {item.species}</div>
                <div>Status: {item.status}</div>
              </div>
            ))}
        </div>
        <div className="pagination">
          <Pagination pageHandler={pageHandler} info={response?.info} page={page} />
        </div>
      </>
    );
  };

  return (
    <main className="container container-main">
      <div className={classes['inner-wrapper']}>
        <div className="main-wrapper">
          {loading ? (
            <span className="loader"></span>
          ) : response?.results ? (
            print()
          ) : (
            <div>Ничего не найдено!</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Main;
