import { Button } from 'antd';
import { styled } from 'styled-components';

import { ArrowsOutSimple } from 'assets/icons';
import { COLORS } from 'constants/colorPalette';

export interface IIsCardSelected {
  isCardSelected: boolean;
}

export const CardWrapper = styled('div')<IIsCardSelected>(
  ({ isCardSelected }) => ({
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '288px',
    height: '442px',
    boxShadow: isCardSelected
      ? '0px 0px 0px 1px rgba(34, 80, 252, 0.20), 0px 0px 0px 4px rgba(34, 80, 252, 0.20)'
      : '0px 0px 0px 1px #DCE1EB',
    transition: '.2s ease',
    borderRadius: '12px',
    backgroundColor: COLORS.white,
    '&:hover': {
      boxShadow: isCardSelected
        ? '0px 0px 0px 1px rgba(34, 80, 252, 0.20), 0px 0px 0px 4px rgba(34, 80, 252, 0.20)'
        : '0px 20px 40px 0px rgba(0, 34, 102, 0.10), 0px 4px 8px 0px rgba(0, 34, 102, 0.05), 0px 0px 0px 1px rgba(34, 80, 252, 0.20), 0px 0px 0px 8px rgba(0, 0, 0, 0.04)',
      transition: '.2s ease',
      '& svg': {
        display: 'block',
      },
      '& h3': {
        color: COLORS.generalBlue,
      },
    },
  }),
);

export const TextWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '130px',
  maxHeight: '130px',
  minHeight: '130px',
  width: '100%',
  padding: '20px 20px 0 20px',
});

export const CardTitle = styled('h3')({
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '20px',
  color: COLORS.generalBlack,
  margin: 0,
});

export const CardText = styled('p')({
  fontSize: '13px',
  fontWeight: 500,
  lineHeight: '20px',
  color: 'rgba(0, 0, 0, 0.5)',
  marginTop: '10px',
  margin: 0,
});

export const StyledButton = styled(Button)({
  width: '80px',
  height: '36px',
  padding: '8px',
  borderRadius: '6px',
  color: COLORS.generalBlue,
  backgroundColor: 'rgba(34, 80, 252, 0.12)',
  textAlign: 'center',
  verticalAlign: 'center',
  fontSize: '13px',
  border: 'none',
  '&:hover': {
    color: `${COLORS.generalBlue} !important`,
    backgroundColor: 'rgba(34, 80, 252, 0.16)',
  },
  '& .active': {
    color: `${COLORS.generalBlue} !important`,
    backgroundColor: 'rgba(34, 80, 252, 0.2)',
  },
});

export const StyledArrowsOutSimple = styled(ArrowsOutSimple)({
  display: 'none',
});
