import Item from '../Item/Item';
import ItemSkeleton from '../Item/ItemSkeleton';

const ItemList = ({ items }) => {
  return (
    <section className='item-list'>
      {/* Mapear los productos */}
      {items.length > 0
        ? items.map(({ id, title, price, imgUrl }) => (
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
