import { FC, useContext } from 'react';
import { useCart, Item } from 'react-use-cart';

import Sum from 'components/Sum';

import {
  BasketTitle,
  BasketTitleWrapper,
  BasketWrapper,
  StyledTable,
  SumWrapper,
} from './styled';
import { BASKET_TEXT } from './constants';
import { COLUMNS_CONFIG, TABLE_SCROLL_CONFIG } from './config';
import { formatNumberWithSpaces } from './renders';
import TableContextProvider, { TableContext } from './context';

const BasketContainer: FC = () => {
  const { items, cartTotal } = useCart();

  const calculateHosting = (items: Item[]) =>
    items.reduce(
      (total, item) => total + item.quantity! * item['initialHosting'],
      0,
    );

  const totalHosting = calculateHosting(items);

  const context = useContext(TableContext);

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
        onRow={(_, index) => {
          return {
            onMouseEnter: () => {
              if (index !== undefined) {
                context.setState((currentState: any) => ({
                  ...currentState,
                  [index.toString()]: true,
                }));
              }
            },
            onMouseLeave: () => {
              if (index !== undefined) {
                context.setState((currentState: any) => ({
                  ...currentState,
                  [index.toString()]: false,
                }));
              }
            },
          };
        }}
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

const Basket = () => {
  return (
    <TableContextProvider>
      <BasketContainer />
    </TableContextProvider>
  );
};

export default Basket;
