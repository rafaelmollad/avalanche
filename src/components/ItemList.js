import Item from './Item';
import ItemSkeleton from './ItemSkeleton';

const ItemList = ({ catalog }) => {
  return (
    <section className='item-list'>
      {/* Mapear los productos */}
      {catalog.length > 0
        ? catalog.map(({ id, title, price, imgUrl }) => (
            <Item
              key={id}
              id={id}
              title={title}
              price={price}
              imgUrl={imgUrl}
            />
          ))
        : Array(8)
            .fill(<ItemSkeleton />)
            .map((itemSkeleton, index) => <ItemSkeleton key={index} />)}
    </section>
  );
};

export default ItemList;
