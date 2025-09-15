import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ProjectDetails from './components/pages/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { register, setupOfflineDetection } from './lib/serviceWorker';
import './App.css';

function App() {
  useEffect(() => {
    // Register service worker
    register();
    
    // Setup offline detection
    setupOfflineDetection();
    
    // Add offline status indicator to DOM
    const offlineStatus = document.createElement('div');
    offlineStatus.id = 'offline-status';
    offlineStatus.className = 'fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50';
    offlineStatus.style.display = 'none';
    offlineStatus.textContent = 'You are offline. Some features may be limited.';
    document.body.appendChild(offlineStatus);
    
    return () => {
      const status = document.getElementById('offline-status');
      if (status) {
        status.remove();
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
