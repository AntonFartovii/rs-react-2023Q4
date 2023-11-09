import { JSX } from 'react';
import { MAIN_ROUTE, PAGE_404, SEARCH_ROUTE } from './pages';
import MainPage from '../pages/MainPage';
import Page404 from '../pages/Page404';
import CharacterPage from '../pages/CharacterPage';

export interface IRoute {
  name: string;
  path: string;
  Component: () => JSX.Element;
  routes?: IRoute[];
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
    name: 'Main Pagination',
    path: MAIN_ROUTE + SEARCH_ROUTE + '/:page',
    Component: () => <MainPage />,
    routes: [
      {
        name: 'Front page with character',
        path: 'details/:id',
        Component: () => <CharacterPage />,
      },
    ],
  },
];
