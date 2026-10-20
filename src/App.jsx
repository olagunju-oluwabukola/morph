import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Shop from './pages/Shop';
import Hub from './pages/Hub';
import Projects from './pages/Projects';
import About from './pages/About';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="shop" element={<Shop />} />
        <Route path="hub" element={<Hub />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="partnerships" element={<Partnerships />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
