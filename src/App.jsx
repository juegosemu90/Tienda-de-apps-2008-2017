import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SideNav from './components/SideNav';
import HomePage from './pages/HomePage';
import AppDetailPage from './pages/AppDetailPage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import CategoriesPage from './pages/CategoriesPage';
import TopPage from './pages/TopPage';
import './App.css';

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-body">
        <SideNav />
        <main className="app-main">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:id" element={<AppDetailPage />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/top" element={<TopPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
}
