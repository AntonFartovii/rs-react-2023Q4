import classes from '../css/layout.module.css';
import { ICharacter } from '../http/interfaces';
import Pagination from './Pagination';
import { useContext } from 'react';
import { Context, ContextType } from '../App.tsx';
import Character from './Character.tsx';

interface MainProps {
  loading: boolean;
}

const Main = ({ loading }: MainProps) => {
  const { response } = useContext<ContextType>(Context);

  const print = () => {
    return (
      <>
        <div className="character-list">
          {response &&
            response.results?.map((item: ICharacter) => <Character item={item} key={item.id} />)}
        </div>
        <div className="pagination">
          <Pagination />
        </div>
      </>
    );
  };

  return (
    <main className="container container-main">
      <div className={classes['inner-wrapper']}>
        <div className="main-wrapper">
          {loading ? (
            <span className="loader" data-testid="loading"></span>
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
