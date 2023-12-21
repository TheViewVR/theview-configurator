import { FC } from 'react';
import { Divider } from 'antd';

import {
  MonthText,
  SumLeftSection,
  SumRightSection,
  SumText,
  SumWrapper,
  TypeText,
} from './styled';

export interface ISum {
  price?: number | string;
  hosting?: number | string;
  isCardView?: boolean;
  isBasketView?: boolean;
}

const Sum: FC<ISum> = ({
  price,
  hosting,
  isCardView,
  isBasketView = false,
}) => {
  return (
    <SumWrapper>
      <SumLeftSection isBasketView={isBasketView}>
        <SumText isCardView={isCardView}>
          {price ? `$${price}` : 'free'}
        </SumText>
        <TypeText>one-time {!isCardView && 'fee'}</TypeText>
      </SumLeftSection>
      <Divider type='vertical' style={{ height: '36px', margin: 0 }} />
      <SumRightSection>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <SumText isCardView={isCardView}>
            {hosting ? `$${hosting}` : 'free'}
          </SumText>
          <MonthText>
            {hosting ? (isCardView ? '/mo' : '/month') : ''}
          </MonthText>
        </div>
        <TypeText>hosting {!isCardView && 'fee'}</TypeText>
      </SumRightSection>
    </SumWrapper>
  );
};

export default Sum;
