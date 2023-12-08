import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KaKaoMap from './components/location/KaKaoMap';
import HomePage from './pages/HomePage';
import InterviewPage from './pages/InterviewPage';
import LocationPage from './pages/LocationPage';
import ProductPage from './pages/ProductPage';
import Layout from './shared/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/interview" element={<InterviewPage />} />
        </Route>
        <Route path="/test-location" element={<KaKaoMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
