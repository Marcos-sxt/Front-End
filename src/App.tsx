import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './paginas/components/estaticos/navbar/Navbar';
import Footer from './paginas/components/estaticos/footer/Footer';

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <Footer />
     
    </>
  );
}

export default App;
