import { FC } from 'react';
import { useCart } from 'react-use-cart';

import {
  DEFAULT_STEP_VALUE,
  FREE_ADDONS_ITEM_ID,
  FREE_INCREASING_ADDONS_ITEMS_IDS,
  AUTO_INCREASE_STEP_VALUE,
  FREE_CONTENT_PACKS_ITEM_ID,
  FREE_INCREASING_CONTENT_ITEMS_IDS,
  NON_ADDABLE_ID_ARRAY,
} from 'constants/common';

import NumberInput from './NumberInput';
import { INumberInputContainer } from './types';

const NumberInputContainer: FC<INumberInputContainer> = ({
  cardContent,
  isBasketView,
  isModalView,
  isPlusDisabled,
}) => {
  const { updateItemQuantity, getItem, updateItem, inCart } = useCart();
  const currentItem = getItem(cardContent?.id);
  const freeContentItem = getItem(FREE_CONTENT_PACKS_ITEM_ID);
  const freeAddonsItem = getItem(FREE_ADDONS_ITEM_ID);

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
    if (
      FREE_INCREASING_CONTENT_ITEMS_IDS.includes(currentItem?.id) &&
      inCart(freeContentItem?.id)
    ) {
      updateItemQuantity(
        freeContentItem?.id,
        freeContentItem?.quantity + AUTO_INCREASE_STEP_VALUE,
      );
    }
    if (
      FREE_INCREASING_ADDONS_ITEMS_IDS.includes(currentItem?.id) &&
      inCart(freeAddonsItem?.id)
    ) {
      updateItemQuantity(
        freeAddonsItem?.id,
        freeAddonsItem?.quantity + AUTO_INCREASE_STEP_VALUE,
      );
    }
  };

  const isButtonsDisabled = NON_ADDABLE_ID_ARRAY.includes(currentItem?.id);

  const handleMinusButtonClick = () => {
    updateItemQuantity(
      currentItem?.id,
      currentItem?.quantity - DEFAULT_STEP_VALUE,
    );
    updateItem(currentItem?.id, {
      hosting: currentItem?.hosting - currentItem?.initialHosting,
      totalPrice: currentItem?.totalPrice - currentItem?.price,
    });
    if (
      FREE_INCREASING_CONTENT_ITEMS_IDS.includes(currentItem?.id) &&
      inCart(freeContentItem?.id)
    ) {
      updateItemQuantity(
        freeContentItem?.id,
        freeContentItem?.quantity - AUTO_INCREASE_STEP_VALUE,
      );
    }
    if (
      FREE_INCREASING_ADDONS_ITEMS_IDS.includes(currentItem?.id) &&
      inCart(freeAddonsItem?.id)
    ) {
      updateItemQuantity(
        freeAddonsItem?.id,
        freeAddonsItem?.quantity - AUTO_INCREASE_STEP_VALUE,
      );
    }
  };

  return (
    <NumberInput
      value={value}
      isBasketView={isBasketView}
      isModalView={isModalView}
      isPlusDisabled={isPlusDisabled}
      isButtonsDisabled={isButtonsDisabled}
      handlePlusButtonClick={handlePlusButtonClick}
      handleMinusButtonClick={handleMinusButtonClick}
    />
  );
};

export default NumberInputContainer;
