import { FC } from 'react';

import {
  InnerWrapper,
  MonthText,
  StyledDivider,
  SumLeftSection,
  SumRightSection,
  SumText,
  SumWrapper,
  TypeText,
} from './styled';
import { ISum } from './types';
import { SUM_TEXT } from './constants';
import { EMPTY_STRING } from 'constants/common';

const Sum: FC<ISum> = ({
  price,
  hosting,
  isCardView,
  isBasketView = false,
}) => (
  <SumWrapper>
    <SumLeftSection isBasketView={isBasketView}>
      <SumText isCardView={isCardView}>
        {price ? `$${price}` : SUM_TEXT.FREE}
      </SumText>
      <TypeText>
        {SUM_TEXT.ONE_TIME} {!isCardView && SUM_TEXT.FEE}
      </TypeText>
    </SumLeftSection>
    <StyledDivider type='vertical' />
    <SumRightSection>
      <InnerWrapper>
        <SumText isCardView={isCardView}>
          {hosting ? `$${hosting}` : SUM_TEXT.FREE}
        </SumText>
        <MonthText>
          {hosting ? (isCardView ? SUM_TEXT.MO : SUM_TEXT.MONTH) : EMPTY_STRING}
        </MonthText>
      </InnerWrapper>
      <TypeText>
        {SUM_TEXT.HOSTING} {!isCardView && SUM_TEXT.FEE}
      </TypeText>
    </SumRightSection>
  </SumWrapper>
);

export default Sum;
