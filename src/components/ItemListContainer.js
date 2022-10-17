import ProductList from './ProductList';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='list-container'>
      <ProductList category='Hombre' />
      <ProductList category='Mujer' />
      <ProductList category='Denim' />
    </div>
  );
};

export default ItemListContainer;
