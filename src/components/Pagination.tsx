import React, { JSX } from 'react';
import { ResponseInfo } from '../http/interfaces';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../router/pages';

interface IPagination {
  pageHandler: (value: string) => void;
  info: ResponseInfo | undefined;
  page: string;
}

const Pagination = ({ pageHandler, info, page }: IPagination) => {
  const prevClass = info?.prev ? 'pagination-item normal active' : 'pagination-item disabled';
  const nextClass = info?.next ? 'pagination-item normal active' : 'pagination-item disabled';
  const navigate = useNavigate();

  const print = () => {
    const arr: JSX.Element[] = [];
    const count = info?.pages || 0;
    for (let i = 1; i <= count; i++) {
      const className = i === +page ? 'pagination-item normal' : 'pagination-item normal active';
      arr.push(
        <div className={className} onClick={() => navigate(MAIN_ROUTE + 'search/' + i)}>
          {i}
        </div>
      );
    }
    return arr;
  };
  console.log(info);
  return (
    <>
      <input type="button" className={prevClass} value="<" onClick={() => pageHandler('prev')} />
      {print()}
      <input type="button" className={nextClass} value=">" onClick={() => pageHandler('next')} />
    </>
  );
};

export default Pagination;
