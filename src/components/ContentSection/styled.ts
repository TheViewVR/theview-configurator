import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const StyledSectionWrapper = styled('div')({
  marginTop: '40px',
  background: COLORS.lightBg,
  width: '920px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '40px',
});

export const StyledCardImage = styled('img')({
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const CardsWrapper = styled('div')({
  display: 'flex',
  gap: '28px',
  marginTop: '28px',
  flexWrap: 'wrap',
});
