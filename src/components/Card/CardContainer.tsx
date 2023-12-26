import { FC, useState } from 'react';
import { useCart } from 'react-use-cart';

import {
  AUTO_INCREASE_STEP_VALUE,
  DEFAULT_ITEM_QUANTITY,
  FREE_INCREASING_ADDONS_ITEMS_IDS,
  FREE_INCREASING_CONTENT_ITEMS_IDS,
  NON_ADDABLE_ID_ARRAY,
  NON_INCREASING_ITEMS_ID_ARRAY,
} from 'constants/common';
import { FREE_CONTENT_AUTO_ADDED_ITEM } from 'components/sections/ContentSection/constants';
import { FREE_ADDONS_AUTO_ADDED_ITEM } from 'components/sections/AddOnsSection/constants';

import { ICardContainer } from './types';
import Card from './Card';

const CardContainer: FC<ICardContainer> = ({ cardContent, isCardView }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addItem, inCart } = useCart();

  const handleAddButtonClick = () => {
    addItem(cardContent, DEFAULT_ITEM_QUANTITY);
    if (FREE_INCREASING_CONTENT_ITEMS_IDS.includes(cardContent?.id)) {
      addItem(FREE_CONTENT_AUTO_ADDED_ITEM, AUTO_INCREASE_STEP_VALUE);
    }
    if (FREE_INCREASING_ADDONS_ITEMS_IDS.includes(cardContent?.id)) {
      addItem(FREE_ADDONS_AUTO_ADDED_ITEM, AUTO_INCREASE_STEP_VALUE);
    }
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const isAddButtonVisible = !inCart(cardContent?.id);
  const isAddButtonDisabled = NON_ADDABLE_ID_ARRAY.includes(cardContent?.id);
  const isPlusDisabled = NON_INCREASING_ITEMS_ID_ARRAY.includes(
    cardContent?.id,
  );

  return (
    <Card
      cardContent={cardContent}
      isCardView={isCardView}
      isModalVisible={isModalVisible}
      isAddButtonDisabled={isAddButtonDisabled}
      isAddButtonVisible={isAddButtonVisible}
      isPlusDisabled={isPlusDisabled}
      handleAddButtonClick={handleAddButtonClick}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
    />
  );
};

export default CardContainer;
