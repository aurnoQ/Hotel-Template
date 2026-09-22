import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/layout/Footer';
import MobileActionBar from '../components/layout/MobileActionBar';

export default function MainLayout({ children, transparentNav = false }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent={transparentNav} />
      <main className="flex-1 pb-16 lg:pb-0" id="main-content">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
