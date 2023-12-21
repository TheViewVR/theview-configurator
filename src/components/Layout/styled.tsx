import { Layout } from 'antd';
import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';
import { BASKET_WIDTH } from 'constants/menu';

const { Content } = Layout;

export const StyledMainLayout = styled(Layout)({
  position: 'relative',
  height: '100vh',
  overflowX: 'scroll',
});

export const StyledContent = styled(Content)({
  height: '100%',
  maxHeight: '100%',
  padding: '20px 60px 0',
  background: COLORS.lightBg,
  overflowY: 'scroll',
  position: 'relative',
  '@media (max-width: 1024px)': {
    width: '100vw',
    padding: '20px 30px 0',
  },
});

export const StyledLayout = styled(Layout)({
  minHeight: '100vh',
  height: '100%',
  width: `calc(100vw - ${BASKET_WIDTH})`,
});
