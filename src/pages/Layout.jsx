import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';




const Layout = ({ children }) => {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
  };

export default Layout;