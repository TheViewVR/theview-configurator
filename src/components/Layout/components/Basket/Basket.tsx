import { FC, useEffect } from 'react';
import { useCart, Item } from 'react-use-cart';

import Sum from 'components/Sum/Sum';

import {
  BasketTitle,
  BasketTitleWrapper,
  BasketWrapper,
  StyledTable,
  SumWrapper,
} from './styled';
import { INITIAL_BASKET_ITEMS, BASKET_TEXT } from './constants';
import { COLUMNS_CONFIG, TABLE_SCROLL_CONFIG } from './config';
import { formatNumberWithSpaces } from './renders';

const Basket: FC = () => {
  const { items, setItems, cartTotal } = useCart();

  useEffect(() => {
    setItems(INITIAL_BASKET_ITEMS);
  }, []);

  const calculateHosting = (items: Item[]) =>
    items.reduce(
      (total, item) => total + item.quantity! * item['initialHosting'],
      0,
    );

  const totalHosting = calculateHosting(items);

  return (
    <BasketWrapper>
      <BasketTitleWrapper>
        <BasketTitle>{BASKET_TEXT.title}</BasketTitle>
      </BasketTitleWrapper>
      <StyledTable
        dataSource={items}
        columns={COLUMNS_CONFIG}
        pagination={false}
        scroll={TABLE_SCROLL_CONFIG}
      />
      <SumWrapper>
        <Sum
          isBasketView={true}
          price={formatNumberWithSpaces(cartTotal)}
          hosting={formatNumberWithSpaces(totalHosting)}
        />
      </SumWrapper>
    </BasketWrapper>
  );
};

export default Basket;
