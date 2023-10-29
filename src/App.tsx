import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/Router';
import React from 'react';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
