import React from 'react';
import Headers from './Header';
import Footers from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
      <Headers />
      <Outlet/>
      <Footers/>
    </div>
  );
};

export default Layout;
