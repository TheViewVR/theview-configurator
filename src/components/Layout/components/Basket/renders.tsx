import { ReactNode } from 'react';
import { useCart } from 'react-use-cart';

import { ICardContent } from 'components/Card/Card';
import NumberInput from 'components/NumberInput/NumberInput';

import { TableProduct, TableText } from './styled';

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

export const renderActions = (cardContent: ICardContent): ReactNode => {
  const { getItem } = useCart();

  const currentItem = getItem(cardContent?.id);

  const value = currentItem?.quantity;
  return cardContent.id === '0' ? (
    <TableText>{value}</TableText>
  ) : (
    <NumberInput cardContent={cardContent} isModalView={true} />
  );
};
