import { Item, useCart } from 'react-use-cart';

import TableContextProvider from './context';
import Basket from './Basket';

const BasketContainer = () => {
  const { items, cartTotal } = useCart();

  const calculateHosting = (items: Item[]) =>
    items.reduce(
      (total, item) => total + item.quantity! * item['initialHosting'],
      0,
    );

  const totalHosting = calculateHosting(items);

  return (
    <TableContextProvider>
      <Basket totalHosting={totalHosting} cartTotal={cartTotal} items={items} />
    </TableContextProvider>
  );
};

export default BasketContainer;
