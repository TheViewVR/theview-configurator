import { FC } from 'react';

import { Minus, Plus } from 'assets/icons';

import {
  Input,
  ModifyerButtonLeft,
  ModifyerButtonRight,
  QuantityContainer,
} from './styled';
import { INumberInput } from './types';

const NumberInput: FC<INumberInput> = ({
  value,
  isBasketView = false,
  isModalView = false,
  isPlusDisabled = false,
  handlePlusButtonClick,
  handleMinusButtonClick,
}) => (
  <QuantityContainer isBasketView={isBasketView}>
    <ModifyerButtonLeft
      onClick={handleMinusButtonClick}
      isBasketView={isBasketView}
    >
      <Minus />
    </ModifyerButtonLeft>
    <Input
      type='text'
      value={value}
      readOnly
      min={1}
      isModalView={isModalView}
      isBasketView={isBasketView}
    />
    <ModifyerButtonRight
      onClick={handlePlusButtonClick}
      disabled={isPlusDisabled}
      isBasketView={isBasketView}
    >
      {!isPlusDisabled && <Plus />}
    </ModifyerButtonRight>
  </QuantityContainer>
);

export default NumberInput;
