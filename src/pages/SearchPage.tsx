import React from 'react';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
  const { page } = useParams() as { page: string };

  return <div>{page}</div>;
};

export default SearchPage;
