import { ICardContent } from 'components/Card/types';

export interface IIsModalView {
  isModalView: boolean;
  isBasketView?: boolean;
}

export interface IIsBasketView {
  isBasketView: boolean;
}

export interface INumberInputContainer {
  cardContent: ICardContent;
  isBasketView?: boolean;
  isModalView?: boolean;
  isPlusDisabled?: boolean;
}

export interface INumberInput
  extends Omit<INumberInputContainer, 'cardContent'> {
  value: number;
  isButtonsDisabled: boolean;
  handleMinusButtonClick: () => void;
  handlePlusButtonClick: () => void;
}
