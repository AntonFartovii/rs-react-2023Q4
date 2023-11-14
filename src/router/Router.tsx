import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage.tsx';
import Page404 from '../pages/Page404.tsx';
import { MAIN_ROUTE, PAGE_404, SEARCH_ROUTE } from './pages.ts';
import CharacterPage from '../pages/CharacterPage.tsx';
import ErrorFallback from '../components/ErrorFallback.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainPage />} errorElement={<ErrorFallback />} />
      <Route path={SEARCH_ROUTE + '/:page'} element={<MainPage />}>
        <Route path=":id" element={<CharacterPage />} />
      </Route>
      <Route path={PAGE_404} element={<Page404 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRouter;
