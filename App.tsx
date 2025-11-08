import React from 'react';
import { HashRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import SinglePostPage from './pages/SinglePostPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import AIPlannerPage from './pages/AIPlannerPage';
import { DataProvider } from './contexts/DataContext';

const AppLayout = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-secondary font-serif text-text-dark">
      <Header />
      <main className="flex-grow pt-20"> {/* Padding top to offset for fixed header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          {/* FIX: Restructured routes to use a nested layout route. This is the modern approach for `react-router-dom` v6, improving code organization and fixing the prop-related errors. */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<BlogPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="post/:postId" element={<SinglePostPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="ai-practice" element={<AIPlannerPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </HashRouter>
    </DataProvider>
  );
};

export default App;
