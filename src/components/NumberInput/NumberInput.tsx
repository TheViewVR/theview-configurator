import { FC } from 'react';
import { useCart } from 'react-use-cart';

import { Minus, Plus } from 'assets/icons';
import { ICardContent } from 'components/Card/types';

import {
  Input,
  ModifyerButtonLeft,
  ModifyerButtonRight,
  QuantityContainer,
} from './styled';

export interface INumberInput {
  cardContent: ICardContent;
  isBasketView?: boolean;
  isModalView?: boolean;
  isPlusDisabled?: boolean;
}

const NumberInput: FC<INumberInput> = ({
  cardContent,
  isBasketView = false,
  isModalView = false,
  isPlusDisabled = false,
}) => {
  const { updateItemQuantity, getItem, updateItem } = useCart();
  const currentItem = getItem(cardContent?.id);

  const value = currentItem?.quantity;

  const increment = () => {
    updateItemQuantity(currentItem?.id, currentItem?.quantity + 1);
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting + currentItem?.initialHosting,
      totalPrice: currentItem?.totalPrice + currentItem?.price,
    });
  };

  const decrement = () => {
    updateItemQuantity(currentItem?.id, currentItem?.quantity - 1);
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting - currentItem?.initialHosting,
      totalPrice: currentItem?.totalPrice - currentItem?.price,
    });
  };

  return (
    <QuantityContainer isBasketView={isBasketView}>
      <ModifyerButtonLeft onClick={decrement} isBasketView={isBasketView}>
        <Minus />
      </ModifyerButtonLeft>
      <Input
        type='text'
        value={value}
        readOnly
        min={1}
        isModalView={isModalView}
        isBasketView={isBasketView}
      />
      <ModifyerButtonRight
        onClick={increment}
        disabled={isPlusDisabled}
        isBasketView={isBasketView}
      >
        {!isPlusDisabled && <Plus />}
      </ModifyerButtonRight>
    </QuantityContainer>
  );
};

export default NumberInput;
