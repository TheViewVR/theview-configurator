import { FC, useState } from 'react';
import { useCart } from 'react-use-cart';

import {
  DEFAULT_ITEM_QUANTITY,
  NON_INCREASING_ITEMS_ID_ARRAY,
} from 'constants/common';

import { ICardContainer } from './types';
import Card from './Card';

const CardContainer: FC<ICardContainer> = ({ cardContent, isCardView }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addItem, inCart } = useCart();

  const handleAddButtonClick = () => {
    addItem(cardContent, DEFAULT_ITEM_QUANTITY);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const isAddButtonVisible = !inCart(cardContent.id);
  const isPlusDisabled = NON_INCREASING_ITEMS_ID_ARRAY.includes(cardContent.id);

  return (
    <Card
      cardContent={cardContent}
      isCardView={isCardView}
      isModalVisible={isModalVisible}
      isAddButtonVisible={isAddButtonVisible}
      isPlusDisabled={isPlusDisabled}
      handleAddButtonClick={handleAddButtonClick}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
    />
  );
};

export default CardContainer;
