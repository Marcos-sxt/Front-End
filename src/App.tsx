import React from 'react';
import './App.css';
import Home from './components/paginas/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/paginas/login/Login';
import CadastroUsuario from './components/paginas/cadastrousuario/CadastroUsuario';

function App() {
  return (

    <Router>  
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}  />
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastrousuario' element={<CadastroUsuario/>}/>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
