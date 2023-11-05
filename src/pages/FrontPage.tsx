import React from 'react';
import { Outlet } from 'react-router-dom';

const FrontPage = () => {
  return (
    <div className="container-frontpage">
      <div className="left-front">Front Page</div>
      <Outlet />
    </div>
  );
};

export default FrontPage;
