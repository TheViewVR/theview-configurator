import { ReactNode, useContext } from 'react';
import { useCart } from 'react-use-cart';

import { ICardContent } from 'components/Card/types';
import NumberInput from 'components/NumberInput';
import {
  NON_ADDABLE_ID_ARRAY,
  NON_INCREASING_ITEMS_ID_ARRAY,
  STANDART_PACKAGE_ID,
} from 'constants/common';
import { formatNumberWithSpaces } from 'utils';

import { TableProduct, TableText } from './styled';
import { TableContext } from './context';

export const renderMoneyDollars = (value?: number): ReactNode => (
  <TableText>{value ? '$' + formatNumberWithSpaces(value) : 'free'}</TableText>
);

export const renderProduct = (value: string): ReactNode => (
  <TableProduct>{value}</TableProduct>
);

export const renderQuantity = (
  cardContent: ICardContent,
  _: unknown,
  idx: number,
): ReactNode => {
  const { getItem } = useCart();
  const context = useContext(TableContext);

  const currentItem = getItem(cardContent?.id);
  const value = currentItem?.quantity;

  const isHovered = context.state[idx];

  const isPlusDisabled = NON_INCREASING_ITEMS_ID_ARRAY.includes(
    cardContent?.id,
  );

  if (
    cardContent?.id === STANDART_PACKAGE_ID ||
    NON_ADDABLE_ID_ARRAY.includes(cardContent?.id)
  ) {
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
