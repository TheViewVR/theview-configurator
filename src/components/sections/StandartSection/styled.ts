import { styled } from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const SectionWrapper = styled('div')({
  width: '920px',
  height: '532px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '28px',
  borderRadius: '12px',
  backgroundColor: COLORS.white,
  fontFamily: 'Poppins, sans-serif',
  boxShadow:
    '0px 20px 40px 0px rgba(0, 34, 102, 0.10), 0px 4px 8px 0px rgba(0, 34, 102, 0.05), 0px 0px 0px 1px rgba(34, 80, 252, 0.20)',
  '@media (min-width: 1920px)': {
    width: '1250px',
    justifyContent: 'flex-start',
    gap: '60px',
    height: '560px',
  },
});

export const SectionTitle = styled('h1')({
  padding: '44px 0 0 40px',
  fontWeight: 600,
  fontSize: '20px',
  color: 'rgba(0, 0, 0, 0.9)',
  margin: 0,
  '@media (min-width: 1920px)': {
    fontSize: '23px',
  },
});

export const ImageSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const StyledImage = styled('img')({
  '@media (min-width: 1920px)': {
    width: '660px',
  },
});

export const InfoSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const ListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const ListWrapper = styled('div')({
  padding: '44px 40px 0 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const ListItemTitle = styled('p')({
  margin: 0,
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
  '@media (min-width: 1920px)': {
    fontSize: '15px',
  },
});

export const InfoBadge = styled('div')({
  height: '60px',
  width: '280px',
  borderRadius: '8px',
  backgroundColor: '#EBF0FF',
  fontFamily: 'Poppins, sans-serif',
  color: 'rgba(0, 0, 0, 0.5)',
  lineHeight: '16px',
  fontSize: '11px',
  padding: '8px 12px',
  '@media (min-width: 1920px)': {
    height: '58px',
    width: '338px',
    fontSize: '13px',
    lineHeight: '18px',
  },
});

export const StandartWrapper = styled('div')({
  paddingTop: '10px',
});
