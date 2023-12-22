import { Layout } from 'antd';
import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';

const { Content, Header } = Layout;

export const StyledMainLayout = styled(Layout)({
  height: '100vh',
  overflowX: 'scroll',
  background: COLORS.lightBg,
});

export const StyledHeader = styled(Header)({
  position: 'sticky',
  top: 0,
  zIndex: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '80px',
  background: COLORS.lightBg,
  '@media (min-width: 1360px)': {
    width: 'calc(100vw - 360px)',
    justifyContent: 'center',
  },
});

export const StyledContent = styled(Content)({
  height: '100%',
  maxHeight: '100%',
  padding: '16px 40px 40px 40px',
  background: COLORS.lightBg,
  overflowY: 'scroll',
  '@media (min-width: 1360px)': {
    width: 'calc(100vw - 360px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 30px 0',
  },
});

export const StyledLayout = styled(Layout)({
  height: '100%',
});
