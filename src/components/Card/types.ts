export interface ICardContainer {
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

export interface ICard extends ICardContainer {
  isModalVisible: boolean;
  isAddButtonVisible: boolean;
  isPlusDisabled: boolean;
  handleAddButtonClick: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}
