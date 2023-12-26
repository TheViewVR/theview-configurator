import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const StyledSectionWrapper = styled('div')({
  marginTop: '56px',
  background: COLORS.lightBg,
  width: '920px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '40px',
  '@media (min-width: 1520px)': {
    width: '70vw',
  },
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
  '@media (min-width: 1776px)': {
    justifyContent: 'space-between',
    maxWidth: '70vw',
  },
});

export const SectionTitle = styled('h1')({
  fontWeight: 600,
  fontSize: '20px',
  color: '#000000E5',
  margin: 0,
});
