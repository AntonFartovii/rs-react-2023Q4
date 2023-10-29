import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MAIN_ROUTE, PAGE_404 } from './pages';
import MainPage from '../pages/MainPage';
import Page404 from '../pages/Page404';

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path={MAIN_ROUTE} element={<MainPage />}></Route>
        <Route path="/404" element={<Page404 />}></Route>
        <Route path="*" element={<Navigate to={PAGE_404} />}></Route>
      </Routes>
    );
  }
}
