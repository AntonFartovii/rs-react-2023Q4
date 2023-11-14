import { JSX, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../router/pages';
import { Context, ContextType } from '../App.tsx';

const Pagination = () => {
  const navigate = useNavigate();
  const { response, currentPage, setCurrentPage } = useContext<ContextType>(Context);

  const changePage = (page: string) => {
    setCurrentPage && setCurrentPage(page);
    navigate(MAIN_ROUTE + 'search/' + page);
  };

  const print = () => {
    const arr: JSX.Element[] = [];
    const count = response?.info?.pages || 0;
    for (let i = 1; i <= count; i++) {
      const className =
        i === +currentPage ? 'pagination-item normal' : 'pagination-item normal active';
      arr.push(
        <div
          key={i}
          className={className}
          onClick={() => changePage(`${i}`)}
          data-testid={`pageItem_${i}`}
        >
          {i}
        </div>
      );
    }
    return arr;
  };
  return <>{print()}</>;
};

export default Pagination;
