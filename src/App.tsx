import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import CadastroCategoria from './pages/Categorias/CadastroCategoria/CadastroCategoria';
import DeletarCategoria from './pages/Categorias/DeletarCategoria/DeletaCategoria';
import ListaCategoria from './pages/Categorias/ListaCategoria/ListaCategoria';
import CadastroProd from './pages/produtos/cadastroProd/CadastroProd';
import ListaProdutos from './pages/produtos/listaProdutos/ListaProdutos';
import DeletarProd from './pages/produtos/deletarProd/DeletarProd';
import Contato from './pages/Contato/Contato';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/store';
import PaginaInicial from './pages/paginaInicial/PaginaInicial';
import Cart from './pages/Cart/Cart';


function App() {
  return ( 
    

    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>

          <Routes>

            <Route path="/" element={<PaginaInicial />} />

            <Route path="/home" element={<Home />} />

            <Route path="/homeinicial" element={<PaginaInicial />} />

            <Route path="/login" element={<Login />} />

            <Route path="/cadastrousuario" element={<CadastroUsuario />} />

            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

            <Route path="/formularioCategoria" element={<CadastroCategoria />} />

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

            <Route path="/categorias" element={<ListaCategoria />} />

            <Route path="/formularioProduto" element={<CadastroProd />} />

            <Route path="/formularioProduto/:id" element={<CadastroProd />} />

            <Route path="/produtos" element={<ListaProdutos />} />

            <Route path="/deletarProduto/:id" element={<DeletarProd />} />

            <Route path="/contato" element={<Contato />} />

            <Route path="/carrinho" element={<Cart />} />        


          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </Provider>


  );
}

export default App;
