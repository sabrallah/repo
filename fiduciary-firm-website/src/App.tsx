import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Temporarily disabled
import './App.css';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import TeamPage from './pages/Team';
import TestimonialsPage from './pages/Testimonials';
import ContactPage from './pages/Contact';

// Layout Component with Router
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="App">
    <Navigation />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
