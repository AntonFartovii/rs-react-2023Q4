import React, { ReactElement } from 'react';
import { MAIN_ROUTE, PAGE_404 } from './pages';
import MainPage from '../pages/MainPage';
import Page404 from '../pages/Page404';

export interface IRoute {
  name: string;
  path: string;
  Component: ReactElement;
}

export const routesPages: IRoute[] = [
  {
    name: 'Main page',
    path: MAIN_ROUTE,
    Component: <MainPage />,
  },
];

export const routesAll: IRoute[] = [
  ...routesPages,
  {
    name: 'Page 404',
    path: PAGE_404,
    Component: <Page404 />,
  },
];
