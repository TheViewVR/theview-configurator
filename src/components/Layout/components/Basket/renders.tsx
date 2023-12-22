import { ReactNode, useContext } from 'react';
import { useCart } from 'react-use-cart';

import { ICardContent } from 'components/Card/types';
import { NumberInput } from 'components';

import { TableProduct, TableText } from './styled';
import { TableContext } from './context';

const REPLACE_PATTERN = /\B(?=(\d{3})+(?!\d))/g;
export const EMPTY_STRING_WITH_WHITESPACE = ' ';
export const MISSING_COUNT_VALUE = 0;

export const formatNumberWithSpaces = (value: number): number | string =>
  value > 9999
    ? value.toString().replace(REPLACE_PATTERN, EMPTY_STRING_WITH_WHITESPACE)
    : value;

export const renderMoneyDollars = (value?: number): ReactNode => (
  <TableText>{value ? '$' + formatNumberWithSpaces(value) : 'free'}</TableText>
);

export const renderQuantity = (value: number): ReactNode => (
  <TableText>{value}</TableText>
);

export const renderProduct = (value: string): ReactNode => (
  <TableProduct>{value}</TableProduct>
);

export const renderActions = (
  cardContent: ICardContent,
  _: unknown,
  idx: number,
): ReactNode => {
  const { getItem } = useCart();
  const context = useContext(TableContext);

  const currentItem = getItem(cardContent?.id);
  const value = currentItem?.quantity;

  const isHovered = context.state[idx];

  const isPlusDisabled = ['6', '9'].includes(cardContent.id);

  if (cardContent.id === '0') {
    return <TableText>{value}</TableText>;
  }

  return isHovered ? (
    <NumberInput
      isBasketView={true}
      cardContent={cardContent}
      isModalView={true}
      isPlusDisabled={isPlusDisabled}
    />
  ) : (
    <TableText>{value}</TableText>
  );
};
