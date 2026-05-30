import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import AppLayout from './components/layout/AppLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const CyclePage = lazy(() => import('./pages/CyclePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/proyecto/:slug"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <ProjectPage />
              </Suspense>
            }
          />
          <Route
            path="/ciclo/:id"
            element={
              <Suspense fallback={<div>Cargando...</div>}>
                <CyclePage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;