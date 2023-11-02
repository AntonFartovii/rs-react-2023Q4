import React from 'react';

interface IPagination {
  pageHandler: (value: string) => void;
  prev: string | null | undefined;
  next: string | null | undefined;
}

const Pagination = ({ pageHandler, prev, next }: IPagination) => {
  const prevClass = prev ? 'pagination-item active' : 'pagination-item';
  const nextClass = next ? 'pagination-item active' : 'pagination-item';

  return (
    <>
      <input type="button" className={prevClass} value="Prev" onClick={() => pageHandler('prev')} />
      <input type="button" className={nextClass} value="Next" onClick={() => pageHandler('next')} />
    </>
  );
};

export default Pagination;
