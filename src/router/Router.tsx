import { Navigate, Route, Routes } from 'react-router-dom';
import { PAGE_404 } from './pages';
import { IRoute, routesAll } from './routes';

const AppRouter = () => {
  const renderRoutes = (route: IRoute) => {
    const Component = route.Component;
    if (route.routes) {
      return (
        <Route key={route.path} path={route.path} element={<Component />}>
          {route.routes.map(renderRoutes)}
        </Route>
      );
    } else {
      return <Route key={route.path} path={route.path} element={<Component />} />;
    }
  };

  return (
    <Routes>
      {routesAll.map(renderRoutes)}
      <Route path="*" element={<Navigate to={PAGE_404} />} />
    </Routes>
  );
};

export default AppRouter;
