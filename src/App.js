import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="min-h-screen flex flex-wrap content-between bg-white-800">
    <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
    </div>
    <div className="w-full block">
        <Footer />   
    </div>
  </div>
  );
}

export default App;
