import Item from './Item';

const ItemList = ({ catalog }) => {
  return (
    <section className='item-list'>
      {/* Mapear los productos */}
      {catalog.map(({ id, title, price, imgUrl }) => (
        <Item key={id} title={title} price={price} imgUrl={imgUrl} />
      ))}
    </section>
  );
};

export default ItemList;
