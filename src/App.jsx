import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Marketplace from './pages/Marketplace';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="products" element={<p>Products page</p>} />
          <Route path="services" element={<p>Services page</p>} />
        </Route>
        <Route path="signin" element={<p>Singin</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
