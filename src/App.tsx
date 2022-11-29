import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './paginas/components/estaticos/navbar/Navbar';
import Footer from './paginas/components/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
