import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

export default function User() {
  return (
    <div className='wrapper'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
