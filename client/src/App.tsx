import { Route, Routes } from 'react-router';
import Layout from './components/Layout';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Team from './pages/Team';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
