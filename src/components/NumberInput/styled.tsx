import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';

import { IIsBasketView, IIsModalView } from './types';

export const QuantityContainer = styled('div')<IIsBasketView>(
  ({ isBasketView }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: isBasketView ? '28px' : '40px',
    borderRadius: '6px',
    '&:hover button': {
      border: '1px solid #2250FC',
    },
    '&:hover button:first-child': {
      borderRight: 'none',
    },
    '&:hover button:last-child': {
      borderLeft: 'none',
    },
    '&:hover input': {
      borderTop: '1px solid #2250FC',
      borderBottom: '1px solid #2250FC',
    },
    '&:hover button svg path': {
      stroke: '#2250FC',
    },
  }),
);

export const ModifyerButtonLeft = styled('button')<IIsBasketView>(
  ({ isBasketView }) => ({
    userSelect: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isBasketView ? '18px' : '28px',
    height: isBasketView ? '28px' : '36px',
    fontSize: '13px',
    background: COLORS.white,
    color: '#888',
    border: '1px solid #DCE1EB',
    borderRight: 'none',
    cursor: 'pointer',
    borderRadius: '6px 0 0 6px',
    '&:hover': {
      borderRight: 'none',
    },
    '&:hover:not([disabled])': {
      background: 'rgba(34, 80, 252, 0.16)',
    },
    '&:active:not([disabled]) ': {
      background: 'rgba(34, 80, 252, 0.2)',
    },
    '&[disabled]': {
      cursor: 'default',
    },
  }),
);

export const ModifyerButtonRight = styled(ModifyerButtonLeft)({
  borderRadius: '0 6px 6px 0',
  borderLeft: 'none',
  borderRight: '1px solid #DCE1EB',
  '&:hover:not([disabled])': {
    background: 'rgba(34, 80, 252, 0.16)',
  },
  '&:active:not([disabled]) ': {
    background: 'rgba(34, 80, 252, 0.2)',
  },
});

export const Input = styled('input')<IIsModalView>(
  ({ isModalView, isBasketView }) => ({
    width: isBasketView ? '20px' : '24px',
    height: isBasketView ? '28px' : isModalView ? '32px' : '36px',
    fontSize: isBasketView ? '11px' : '13px',
    border: 0,
    borderTop: '1px solid #DCE1EB',
    borderBottom: '1px solid #DCE1EB',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
    color: isBasketView ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.90)',
    outline: 'none',
    ':active': {
      border: 'none',
    },
  }),
);
