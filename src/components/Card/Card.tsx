import { FC, useState } from 'react';
import { useCart } from 'react-use-cart';

import Sum from 'components/Sum/Sum';
import NumberInput from 'components/NumberInput/NumberInput';
import ModalDialog from 'components/ModalDialog/ModalDialog';

import {
  CardText,
  CardTitle,
  CardWrapper,
  StyledArrowsOutSimple,
  StyledButton,
  TextWrapper,
} from './styled';

export interface ICard {
  cardContent: ICardContent;
  isCardView?: boolean;
}

export interface ICardContent {
  id: string;
  title: string;
  description: string;
  image: JSX.Element;
  price: number;
  hosting: number;
  initialHosting: number;
  totalPrice: number;
}

const Card: FC<ICard> = ({ cardContent, isCardView }) => {
  const [isCardSelected, setCardSelected] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addItem } = useCart();

  const { title, description, price, hosting, image } = cardContent;

  const handleAddButtonClick = () => {
    setCardSelected(true);
    addItem(cardContent, 1);
  };

  return (
    <>
      <CardWrapper
        isCardSelected={isCardSelected}
        onClick={() => setIsModalVisible(true)}
      >
        <TextWrapper>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <CardTitle>{title}</CardTitle>
            <StyledArrowsOutSimple />
          </div>
          <CardText>{description}</CardText>
        </TextWrapper>
        {image}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '38px',
            padding: '0 20px',
          }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Sum price={price} hosting={hosting} isCardView={isCardView} />
          {!isCardSelected ? (
            <StyledButton onClick={handleAddButtonClick}>Add</StyledButton>
          ) : (
            <NumberInput
              cardContent={cardContent}
              handleAddButtonClick={handleAddButtonClick}
            />
          )}
        </div>
      </CardWrapper>
      <ModalDialog
        cardContent={cardContent}
        isModalOpened={isModalVisible}
        isCardSelected={isCardSelected}
        handleCloseModal={() => setIsModalVisible(false)}
        handleAddButtonClick={handleAddButtonClick}
      />
    </>
  );
};

export default Card;
