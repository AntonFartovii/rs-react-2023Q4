import './App.css';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router/Router';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
