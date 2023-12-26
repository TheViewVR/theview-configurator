import { FC } from 'react';
import { useCart } from 'react-use-cart';

import { DEFAULT_STEP_VALUE } from 'constants/common';

import NumberInput from './NumberInput';
import { INumberInputContainer } from './types';

const NumberInputContainer: FC<INumberInputContainer> = ({
  cardContent,
  isBasketView,
  isModalView,
  isPlusDisabled,
}) => {
  const { updateItemQuantity, getItem, updateItem } = useCart();
  const currentItem = getItem(cardContent?.id);

  const value = currentItem?.quantity;

  const handlePlusButtonClick = () => {
    updateItemQuantity(
      currentItem?.id,
      currentItem?.quantity + DEFAULT_STEP_VALUE,
    );
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting + currentItem?.initialHosting,
      totalPrice: currentItem?.totalPrice + currentItem?.price,
    });
  };

  const handleMinusButtonClick = () => {
    updateItemQuantity(
      currentItem?.id,
      currentItem?.quantity - DEFAULT_STEP_VALUE,
    );
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting - currentItem?.initialHosting,
      totalPrice: currentItem?.totalPrice - currentItem?.price,
    });
  };

  return (
    <NumberInput
      value={value}
      isBasketView={isBasketView}
      isModalView={isModalView}
      isPlusDisabled={isPlusDisabled}
      handlePlusButtonClick={handlePlusButtonClick}
      handleMinusButtonClick={handleMinusButtonClick}
    />
  );
};

export default NumberInputContainer;
