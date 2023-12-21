import styled from 'styled-components';
import { Anchor } from 'antd';

import { COLORS } from 'constants/colorPalette';
import { BASKET_WIDTH } from 'constants/menu';

export const HeaderWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '140px',
  width: `calc(100vw - ${BASKET_WIDTH})`,
  padding: '24px 40px 25px 40px',
  background: COLORS.lightBg,
  position: 'sticky',
  fontFamily: 'Poppins, sans-serif',
});

export const MenuWrapper = styled('div')({
  display: 'flex',
  gap: '10px',
});

export const MenuItem = styled(Anchor)({
  width: 'max-content',
  height: '31px',
  fontWeight: 600,
  lineHeight: '15px',

  color: COLORS.generalBlack,
  cursor: 'default',
  span: {
    display: 'none',
  },
  'ant-anchor-ink': {
    display: 'none',
  },
  '& .ant-anchor-link-title:only-child': {
    borderRadius: '28px',
    padding: '8px 10px',
    fontSize: '12px',
    textTransform: 'uppercase',
    textAlign: 'center',
    verticalAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  '& .ant-anchor-link-title:only-child:hover': {
    backgroundColor: 'rgba(34, 80, 252, 0.1)',
    height: '31px',
    padding: '8px 10px',
  },
  '& .ant-anchor-link-title-active': {
    color: `${COLORS.generalBlue} !important `,
    border: `2px solid ${COLORS.generalBlue}`,
    height: '31px',
    verticalAlign: 'center',
    lineHeight: 1,
  },
  '&.ant-anchor-wrapper-horizontal::before': {
    display: 'none !important',
  },
});

export const HeaderTitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});