import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import TopButton from '../components/button/Scroll';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TopButton />
    </>
  );
}

export default Layout;
