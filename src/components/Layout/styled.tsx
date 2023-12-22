import { Layout } from 'antd';
import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';

const { Content } = Layout;

export const StyledMainLayout = styled(Layout)({
  height: '100vh',
  overflowX: 'scroll',
  background: COLORS.lightBg,
});

export const StyledContent = styled(Content)({
  height: '100%',
  maxHeight: '100%',
  padding: '16px 40px 40px 40px',
  background: COLORS.lightBg,
  overflowY: 'scroll',
});

export const StyledLayout = styled(Layout)({
  height: '100%',
});
