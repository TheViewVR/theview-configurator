import { FC } from 'react';

import Sum from 'components/Sum';
import NumberInput from 'components/NumberInput';
import ModalDialog from 'components/ModalDialog';
import { ADD_BUTTON_TEXT } from 'constants/common';

import {
  CardFooter,
  CardText,
  CardTitle,
  CardWrapper,
  StyledArrowsOutSimple,
  StyledButton,
  TextWrapper,
  TitleWrapper,
} from './styled';
import { ICard } from './types';

const Card: FC<ICard> = ({
  cardContent,
  isCardView,
  isModalVisible,
  isPlusDisabled,
  isAddButtonVisible,
  handleAddButtonClick,
  handleOpenModal,
  handleCloseModal,
}) => {
  const { title, description, price, hosting, image } = cardContent;

  return (
    <>
      <CardWrapper
        isCardSelected={!isAddButtonVisible}
        onClick={handleOpenModal}
      >
        <TextWrapper>
          <TitleWrapper>
            <CardTitle>{title}</CardTitle>
            <StyledArrowsOutSimple />
          </TitleWrapper>
          <CardText>{description}</CardText>
        </TextWrapper>
        {image}
        <CardFooter
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Sum price={price} hosting={hosting} isCardView={isCardView} />
          {isAddButtonVisible ? (
            <StyledButton onClick={handleAddButtonClick}>
              {ADD_BUTTON_TEXT}
            </StyledButton>
          ) : (
            <NumberInput
              cardContent={cardContent}
              isPlusDisabled={isPlusDisabled}
            />
          )}
        </CardFooter>
      </CardWrapper>
      <ModalDialog
        cardContent={cardContent}
        isModalOpened={isModalVisible}
        isAddButtonVisible={isAddButtonVisible}
        handleCloseModal={handleCloseModal}
        handleAddButtonClick={handleAddButtonClick}
      />
    </>
  );
};

export default Card;
