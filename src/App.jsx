import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Solutions from './pages/Solutions';
import ContactPage from './pages/ContactPage';
import SolutionPage from './pages/SolutionPage';
import ProductEngineeringPage from './pages/ProductEngineeringPage';
import DesignAutomationPage from './pages/DesignAutomationPage';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

const MainLayout = () => {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/solutions/print-product-engineering" element={<ProductEngineeringPage />} />
                    <Route path="/solutions/design-artwork-automation" element={<DesignAutomationPage />} />
                    <Route path="/solutions/:slug" element={<SolutionPage />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsConditions />} />
                </Routes>
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/*" element={<MainLayout />} />
            </Routes>
        </Router>
    );
}

export default App;
