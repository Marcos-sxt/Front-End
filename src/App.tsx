import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './paginas/components/estaticos/navbar/Navbar';
import Footer from './paginas/components/estaticos/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';
import TabPostagem from './paginas/components/postagens/tabpostagem/TabPostagem';
import ListaTema from './paginas/components/temas/listatema/ListaTema';
import ListaPostagem from './paginas/components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './paginas/components/postagens/cadastroPostagem/cadastroPost';
//import CadastroPost from './paginas/components/postagens/cadastroPostagem/cadastroPost';
import DeletarPostagem from './paginas/components/postagens/deletarPostagem/DeletarPostagem';
import CadastroTema from './paginas/components/temas/cadastroTema/CadastroTema';
import DeletarTema from './paginas/components/temas/deletarTema/DeletarTema';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/tabpostagem' element={<TabPostagem />} />
        <Route path='/temas' element={<ListaTema />} />
        <Route path='/postagem' element={<ListaPostagem />} />
        <Route path="/formularioPostagem" element={<CadastroPost />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
        <Route path="/formularioTema" element={<CadastroTema />} />
        <Route path="/formularioTema/:id" element={<CadastroTema />} />
        <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        <Route path="/deletarTema/:id" element={<DeletarTema />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;