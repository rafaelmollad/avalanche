import { useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SearchResults from './components/SearchResults/SearchResults';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Confirmation/Confirmation';
import NotFound from './components/NotFound/NotFound';

import { CartContext } from './context/CartContext';

const App = () => {
  const { pathname, search } = useLocation();
  const { isCartOpen } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkout/:confirmation' element={<Confirmation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {isCartOpen && <Cart />}

      <Footer />
    </div>
  );
};

export default App;
