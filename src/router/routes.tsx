import React, { JSX } from 'react';
import { MAIN_ROUTE, PAGE_404, SEARCH_ROUTE } from './pages';
import MainPage from '../pages/MainPage';
import Page404 from '../pages/Page404';
import SearchPage from '../pages/SearchPage';

export interface IRoute {
  name: string;
  path: string;
  Component: () => JSX.Element;
}

export const routesPages: IRoute[] = [
  {
    name: 'Main page',
    path: MAIN_ROUTE,
    Component: () => <MainPage />,
  },
];

export const routesAll: IRoute[] = [
  ...routesPages,
  {
    name: 'Page 404',
    path: PAGE_404,
    Component: () => <Page404 />,
  },
  {
    name: 'Search',
    path: SEARCH_ROUTE + '/:id',
    Component: () => <SearchPage />,
  },
  {
    name: 'Search',
    path: SEARCH_ROUTE,
    Component: () => <SearchPage />,
  },
];
