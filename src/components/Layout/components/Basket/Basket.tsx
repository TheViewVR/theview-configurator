import { FC, useContext } from 'react';

import Sum from 'components/Sum';
import { formatNumberWithSpaces } from 'utils';

import {
  BasketTitle,
  BasketTitleWrapper,
  BasketWrapper,
  StyledTable,
  SumWrapper,
} from './styled';
import { BASKET_TEXT } from './constants';
import { COLUMNS_CONFIG, TABLE_SCROLL_CONFIG } from './config';
import { TableContext } from './context';
import { IBasket } from './types';

const Basket: FC<IBasket> = ({ totalHosting, cartTotal, items }) => {
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
              if (index) {
                context.setState((currentState: any) => ({
                  ...currentState,
                  [index.toString()]: true,
                }));
              }
            },
            onMouseLeave: () => {
              if (index) {
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

export default Basket;
