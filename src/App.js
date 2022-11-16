// Importar librerias
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Importar componentes
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SearchResults from './components/SearchResults/SearchResults';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Confirmation/Confirmation';

// Importar context providers
import MenuProvider from './context/MenuContext';
import SearchProvider from './context/SearchContext';
import CartProvider from './context/CartContext';

const App = () => {
  const { pathname, search } = useLocation();

  // Mover la página al comienzo (0, 0) cuando la ruta o el query string cambian.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <div className='App'>
      <CartProvider>
        <MenuProvider>
          <SearchProvider>
            <Header />
          </SearchProvider>
        </MenuProvider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/:confirmation' element={<Confirmation />} />
        </Routes>

        <Cart />

        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
