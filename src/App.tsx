import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import Home from './pages/Home';
import PageLayout from './templates/PageLayout';
import ServicesPage from './pages/Services';

const App: FC = () => (
  <PageLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </PageLayout>
);

export default App;
