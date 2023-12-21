import { styled } from 'styled-components';

export interface ISumText {
  isCardView?: boolean;
}

export interface ISumLeftSection {
  isBasketView?: boolean;
}

export const SumText = styled('p')<ISumText>(({ isCardView }) => ({
  fontWeight: isCardView ? 500 : 600,
  fontSize: isCardView ? '15px' : '20px',
  lineHeight: '16px',
  margin: 0,
  color: 'rgba(0, 0, 0, 0.9)',
  textWrap: 'nowrap',
}));

export const SumLeftSection = styled('div')<ISumLeftSection>(
  ({ isBasketView }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: isBasketView ? 'flex-end' : 'flex-start',
    justifyContent: 'center',
  }),
);

export const SumRightSection = styled(SumLeftSection)({
  alignItems: 'flex-start',
});

export const MonthText = styled(SumText)<ISumText>(({ isCardView }) => ({
  fontSize: isCardView ? '11px' : '13px',
  fontWeight: 500,
}));

export const TypeText = styled('span')({
  color: 'rgba(0, 0, 0, 0.3)',
  fontSize: '11px',
  lineHeight: '16px',
  fontWeight: 500,
  textWrap: 'nowrap',
});

export const SumWrapper = styled('div')({
  fontFamily: 'Poppins, sans-serif',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '16px',
  width: '130px',
  minWidth: '130px',
  maxWidth: '130px',
});
