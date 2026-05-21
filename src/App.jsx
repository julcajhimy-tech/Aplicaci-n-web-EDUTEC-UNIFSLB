import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import AppLayout from './components/layout/AppLayout';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import CyclePage from './pages/CyclePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyecto/:slug" element={<ProjectPage />} />
          <Route path="/ciclo/:id" element={<CyclePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;