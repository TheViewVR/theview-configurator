import { FC, useState } from 'react';
import { useCart } from 'react-use-cart';

import { Minus, Plus } from 'assets/icons';
import { ICardContent } from 'components/Card/Card';
import { StyledButton } from 'components/Card/styled';

import {
  Input,
  ModifyerButtonLeft,
  ModifyerButtonRight,
  QuantityContainer,
} from './styled';

export interface INumberInput {
  cardContent: ICardContent;
  handleAddButtonClick: () => void;
}

const NumberInput: FC<INumberInput> = ({
  cardContent,
  handleAddButtonClick,
}) => {
  const { updateItemQuantity, getItem, updateItem } = useCart();
  const currentItem = getItem(cardContent?.id);
  const [value, setValue] = useState(1);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
    updateItemQuantity(currentItem?.id, currentItem?.quantity + 1);
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting + cardContent?.hosting,
      totalPrice: currentItem?.totalPrice + cardContent?.totalPrice,
    });
  };

  const decrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
    updateItemQuantity(currentItem?.id, currentItem?.quantity - 1);
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting - cardContent?.hosting,
      totalPrice: currentItem?.totalPrice - cardContent?.totalPrice,
    });
  };
  return value ? (
    <QuantityContainer>
      <ModifyerButtonLeft onClick={decrement}>
        <Minus />
      </ModifyerButtonLeft>
      <Input type='text' value={value} readOnly min={1} />
      <ModifyerButtonRight onClick={increment}>
        <Plus />
      </ModifyerButtonRight>
    </QuantityContainer>
  ) : (
    <StyledButton onClick={handleAddButtonClick}>Add</StyledButton>
  );
};

export default NumberInput;
