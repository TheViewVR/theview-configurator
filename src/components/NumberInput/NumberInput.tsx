import { FC } from 'react';
import { useCart } from 'react-use-cart';

import { Minus, Plus } from 'assets/icons';
import { ICardContent } from 'components/Card/Card';

import {
  Input,
  ModifyerButtonLeft,
  ModifyerButtonRight,
  QuantityContainer,
} from './styled';

export interface INumberInput {
  cardContent: ICardContent;
}

const NumberInput: FC<INumberInput> = ({ cardContent }) => {
  const { updateItemQuantity, getItem, updateItem } = useCart();
  const currentItem = getItem(cardContent?.id);

  const value = currentItem?.quantity;

  const increment = () => {
    updateItemQuantity(currentItem?.id, currentItem?.quantity + 1);
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting + cardContent?.hosting,
      totalPrice: currentItem?.totalPrice + cardContent?.totalPrice,
    });
  };

  const decrement = () => {
    updateItemQuantity(currentItem?.id, currentItem?.quantity - 1);
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting - cardContent?.hosting,
      totalPrice: currentItem?.totalPrice - cardContent?.totalPrice,
    });
  };

  return (
    <QuantityContainer>
      <ModifyerButtonLeft onClick={decrement}>
        <Minus />
      </ModifyerButtonLeft>
      <Input type='text' value={value} readOnly min={1} />
      <ModifyerButtonRight onClick={increment}>
        <Plus />
      </ModifyerButtonRight>
    </QuantityContainer>
  );
};

export default NumberInput;
